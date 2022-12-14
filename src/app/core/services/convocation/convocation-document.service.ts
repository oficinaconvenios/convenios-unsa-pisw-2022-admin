import { IDocumentTypeResponse } from '../../../shared/interfaces/create-convocation-document.interface';
import { IHttpServiceResponse, IHttpResponse } from '../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ConvocationDocumentHelper } from './convocation-document.helper';


@Injectable({
  providedIn:"root"
})
export class ConvocationDocumentService extends ConvocationDocumentHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  getAllCreateConvocationDocumentTypes():Observable<IHttpServiceResponse<IDocumentTypeResponse[]>>{
    const response:IHttpServiceResponse<IDocumentTypeResponse[]> = {
      error:false,
      msg:'',
      data:[]
    }
    return this.http.get<IHttpResponse<IDocumentTypeResponse[]>>(this.url + ConvocationDocumentHelper.API_ROUTES.CREATE_CONVOCATION_DOCUMENT_TYPE_GET_ALL)
    .pipe(
      map(resp=>{
        response.data=resp.data
        return response
      }),
      catchError(this.getAllCreateConvocationDocumentTypesError)
    )
  }
}
