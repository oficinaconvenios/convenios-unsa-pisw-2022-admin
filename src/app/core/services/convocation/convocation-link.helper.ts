import { IModalityConvocationResponse, ITypeConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "environments/environment"
import { of } from 'rxjs';


export class ConvocationLinkHelper{


  protected static API_ROUTES = {
    CREATE_CONVOCATION_LINK_TYPE_GET_ALL:"get-all-link-types"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllCreateConvocationLinkTypesError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      //data: [] as ILinkTypeResponse,
      data: [
        {
          id:1,
          name:"Formulario Universidad Destino",
          category:"Formulario Universidad Destino"
        },
        {
          id:2,
          name:"Oferta Académica Universidad Destino",
          category:"Oferta Académica Universidad Destino"
        }
      ]
    })
  }


}
