export const getFullAddress = (data) => {
    let address = '';

    data && data.street && data.street.nameUz ? address += data.street.nameUz + ' ' : address += '';
    data && data.buildingNumber ? address += data.buildingNumber + ' ' : address += '';
    data && data.flatNumber ? address += data.flatNumber + ' ' : address += '';
    data && data.corpusNumber ? address += data.corpusNumber + ' ' : address += '';

    return address;
}