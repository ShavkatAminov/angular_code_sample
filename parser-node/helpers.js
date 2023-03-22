import fs from "fs";


export function getFileData(path) {
    let data = "";
    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (err) {}
    return data;
}

export function createFile(name, content, error) {
    fs.writeFile(name, content, error);
}


/*
function filterParams(dtoData, allData, data = '') {
    let result = '';
    Object.keys(dtoData.properties).forEach(property => {
        if(property !== 'nameCrl' && property !== 'nameRu' && property !== 'nameRU') {
            let position = data.search("'" + property + "'");
            let headerName = '';
            if(position !== -1) {
                position = search(data, '{', position);
                let subData = data.substr(position);
                position = subData.search("headerName");
                if(position !== -1) {
                    subData = subData.substr(position);
                    position = subData.search("'");
                    if(position !== -1) {
                        subData = subData.substr(position + 1);
                        let endPosition = subData.search("'");
                        if(endPosition !== -1) {
                            headerName = subData.substring(0, endPosition);
                        }
                    }
                }
            }
            result += `\n    ${property}: new FilterField('${headerName}', '${getFilterParamName(dtoData.properties[property].type)}'),`;
        }
    });
    return result;
}

function updateList(folder, name, componentUrl, dtoData, allData) {
    let path = '../src/app/modules/reference/technical-directories/' + name + '/' + name + '.component.ts';
    if(fs.existsSync(path)) {
        fs.readFile(path, 'utf-8', function (err, data) {
            data = data.substr(0, data.lastIndexOf("}") - 1);
            let params = filterParams(dtoData, {}, data);
            data += `\n  override filter: FilterFieldGroup = {${params}
  }`
            data = data.replace('\n@Component', 'import {FilterField, FilterFieldGroup } from \'app/shared/helpers/filter/filter.component/filterField\';\n' +
                '\n' +
                '@Component')
            data += '\n}\n';
            fs.writeFile(path, data, function (err) {
            })
        });
    }
 */
