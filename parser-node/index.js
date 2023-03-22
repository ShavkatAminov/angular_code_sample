#!/usr/bin/env node
const axios = require("axios");
const fs = require('fs');
const {mkdirp} = require("mkdirp");
const modules = [
    {
        folderName: 'reference',
        url: 'example.com/docs/v3/api-docs',
    },
]
modules.forEach((item) => {
    axios.get(item.url, { headers: { Accept: "application/json" } })
        .then(res => {
        let urls = [];
        Object.keys(res.data.paths).forEach(path => {
            let componentUrl = path.substr(4);
            if(componentUrl.search("/") === -1) {
                let componentName = componentUrl.replaceAll('-', '.');
                if('post' in res.data.paths[path]) {
                    let dtoUrl = res.data.paths[path]['post']['requestBody']['content']['application/json']['schema']['$ref'];
                    if(dtoUrl) {
                        dtoUrl = dtoUrl.substr(2);
                        let array = dtoUrl.split('/');
                        let dtoData = res.data[array[0]][array[1]][array[2]];
                        createListComponent(item.folderName,componentName, componentUrl, dtoData, res.data);
                        createFormComponent(item.folderName,componentName, componentUrl, dtoData, res.data);
                        urls.push(componentUrl);
                    }
                }
            }
        })
        createEnums(item.folderName, urls);
    });

})

function createEnums(folder, urls) {
    createFile('components/' + folder + '/enums.ts', getEnumsCode(urls), (error) => {
    })
}

function getEnumsCode(urls) {
    let result = "export enum ReferenceApiUrls {\n"
    urls.forEach(item => {
        let name = item.replaceAll('-', '_').toUpperCase();
        result += `    ${name} = '${item}',\n`
    })
    result += '}';
    return result;
}

function createFormComponent(folder, name, componentUrl, dtoData, allData) {
    let prefixDirectory = 'components/' + folder + '/' + name + '/actions/' + name + '.form/';
    mkdirp(prefixDirectory).then(made => {
        createFile(prefixDirectory + name + '.form.component.ts',
            componentContent(folder, name, componentUrl, dtoData, allData, '','actions/example.form/'), (error) => {

        });
        createFile(prefixDirectory + name + '.form.component.html',
            componentContent(folder, name, componentUrl, dtoData, allData, '','actions/example.form/', true), (error) => {

        });
        createFile(prefixDirectory  + name  + '.form.component.spec.ts', componentContent(folder, name, componentUrl, dtoData, allData, '.spec','actions/example.form/'), (error) => {

        });
    })
}

function createListComponent(folder, name, componentUrl, dtoData, allData) {
    let prefixDirectory = 'components/' + folder + '/' + name;
    mkdirp(prefixDirectory).then(made => {
        createFile(prefixDirectory + '/' + name + '.component.ts', componentContent(folder, name, componentUrl, dtoData, allData), (error) => {

        });
        createFile(prefixDirectory + '/' + name + '.component.html', getFileData('example-components/example.html'), (error) => {

        });
        createFile(prefixDirectory + '/' + name + '.component.spec.ts', componentContent(folder, name,  componentUrl, dtoData, allData, '.spec'), (error) => {

        });
    })
}

function getComponentContent(test = '', form = '') {
    return getFileData('example-components/' + form + 'example' + test + '.ts');
}
function getComponentHtml(form = '') {
    return getFileData('example-components/' + form + 'example.html');
}

function getFileData(path) {
    let data = "";
    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (err) {}
    return data;
}

function formControls(dtoData, allData, prefix = '    ') {
    let result = '';
    if(dtoData.properties) {
        Object.keys(dtoData.properties).forEach(property => {
            if(dtoData.properties[property].hasOwnProperty('$ref')) {
                let dtoUrl = dtoData.properties[property]['$ref'];
                dtoUrl = dtoUrl.substr(2);
                let array = dtoUrl.split('/');
                let childDtoData = allData[array[0]][array[1]][array[2]];
                result += `${prefix}${property}: new FormGroup({\n` +
                    formControls(childDtoData, allData, prefix + '    ')
                    + `${prefix}}),\n`
            }
            else {
                result += `${prefix}${property}: new FormControl(null, [` +
                    (dtoData.required && dtoData.required.includes(property) ? 'Validators.required, ' : '') +
                    (dtoData.properties[property].hasOwnProperty('maxLength') ? `Validators.maxLength(${dtoData.properties[property]['maxLength']})` : '') +
                    ((dtoData.properties[property].hasOwnProperty('minLength') && dtoData.properties[property].minLength !== 0) ? `Validators.minLength(${dtoData.properties[property]['minLength']})` : '') +
                    ']),\n';
            }
        });
    }
    return result;
}

function listColumnDefParams(dtoData) {
    let result = '';
    if(dtoData.properties) {
        Object.keys(dtoData.properties).forEach(property => {
            result += '\n      {\n' +
                `        field: \'${property}\',\n` +
                `        headerName: '',\n` +
                (property !== 'status' ? '' : '        type: \'status\',\n') +
                ((dtoData.properties[property].hasOwnProperty('format') &&
                    dtoData.properties[property]['format'] === 'date-time') ? '        type: \'date\',\n' : '') +
                '      },';
        });
    }
    return result;
}

function formControlsHtml(dtoData, allData, prefix = '        ', formGroupName = '') {
    let result = '';
    if(dtoData.properties) {
        Object.keys(dtoData.properties).forEach(property => {
            if(dtoData.properties[property].hasOwnProperty('$ref')) {
                let dtoUrl = dtoData.properties[property]['$ref'];
                dtoUrl = dtoUrl.substr(2);
                let array = dtoUrl.split('/');
                let childDtoData = allData[array[0]][array[1]][array[2]];
                result += `${prefix}<div formGroupName="${property}">\n` +
                    formControlsHtml(childDtoData, allData, prefix + '    ', formGroupName + property + '.')
                    + `${prefix}</div>\n`
            }
            else {
                result +=
                    `${prefix}<het-${getHtmlSuffix(property, dtoData)} formControlName="${property}" [errorMessage]="errorMessage('${formGroupName}${property}')" [showError]="showError('${formGroupName}${property}')"`
                 + (dtoData.required && dtoData.required.includes(property) ? ' [required]="true"' : ``) + `></het-${getHtmlSuffix(property, dtoData)}>\n`;
            }
        });
    }
    return result;
}

function getHtmlSuffix(property, dtoData) {
    if((dtoData.properties[property].hasOwnProperty('format') &&
        dtoData.properties[property]['format'] === 'date-time')) return 'datepicker';
    if(property.substring(property.length - 2) === 'Id') return 'autocomplete';
    if(property === 'status') return "radio-static";
    return "input";
}

function componentContent(module, name, componentUrl, dtoData, allData, test = '', form = '', isHtml = false) {
    let data = isHtml ? getComponentHtml(form) :  getComponentContent(test, form);
    module = module.replaceAll('-', '.');
    let replacements = {
        "#fileName" : name,
        "#compoentClassName" : getClassName(name),
        "#moduleName" : getClassName(module),
        "#colDef" : listColumnDefParams(dtoData),
        "#formControls" : formControls(dtoData, allData),
        "#componentUrl" : componentUrl,
        "#formControlHtml" : formControlsHtml(dtoData, allData),
        "#urlnameUpperCase" : componentUrl.replaceAll('-', '_').toUpperCase(),
        "#filterParams" : filterParams(dtoData, allData),
    }
    Object.keys(replacements).forEach(key => {
        data = data.replaceAll(key, replacements[key]);
    });
    return data;
}

function filterParams(dtoData, allData) {
    let result = '';
    if(dtoData.properties) {
        Object.keys(dtoData.properties).forEach(property => {
            if(property !== 'nameCrl' && property !== 'nameRu' && property !== 'nameRU') {
                let headerName = '';
                result += `\n    ${property}: new FilterField('${headerName}', '${getFilterParamName(dtoData.properties[property])}'),`;
            }
        });
    }
    return result;
}

function search(string, char, position) {
    for(let i = position; i >= 0; i --) {
        if(string[i] === char)
            return i;
    }
    return -1;
}

function getFilterParamName(type) {
    if(type.format && type.format === "date-time") {return "date";}
    if(type === "boolean") {return "status";}
    return 'input';
}

function getClassName(name) {
    let result = "";
    name = "." + name;
    for (let i = 0; i  < name.length; i ++) {
        if(name[i] === '.') {
            result += (name[i + 1] + "").toUpperCase();
            i ++;
            continue;
        }
        result += name[i];
    }
    return result;
}


function createFile(name, content, error) {
    fs.writeFile(name, content, error);

}
