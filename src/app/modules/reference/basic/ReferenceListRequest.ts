import {AbstractSearch} from "@shared/helpers/requests/AbstractSearch";

export class ReferenceListRequest extends AbstractSearch {

  constructor(protected urlReference: string) {
    super('reference/v1/' + urlReference);
  }

}
