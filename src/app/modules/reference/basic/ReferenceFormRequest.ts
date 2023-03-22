import {FormRequest} from "@shared/helpers/requests/FormRequest";

export class ReferenceFormRequest extends FormRequest {

  constructor(protected urlReference: string) {
    super('reference/v1/' + urlReference);
  }

}
