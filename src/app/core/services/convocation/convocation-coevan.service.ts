import { IConvocationCoevanResponseDetail, IConvocationResponse } from '../../../shared/interfaces/convocation.interface';
import { IDocumentTypeResponse } from '../../../shared/interfaces/create-convocation-document.interface';
import { IHttpServiceResponse, IHttpResponse } from '../../../shared/interfaces/transactions/http-response.transaction';
import { Observable, map, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ConvocationCoevanHelper } from './convocation-coevan.helper';


@Injectable({
  providedIn:"root"
})
export class ConvocationCoevanService extends ConvocationCoevanHelper{

  constructor(
    protected override http:HttpClient
    ){
    super(http)
  }

  postCreateConvocationCoevan(coevanForm:FormData):Observable<IHttpServiceResponse<IConvocationCoevanResponseDetail>>{
    const response:IHttpServiceResponse<IConvocationCoevanResponseDetail> = {
      error:false,
      msg:'',
      data:{} as IConvocationCoevanResponseDetail
    }

    console.log("files:",coevanForm.getAll("files[]"))
    console.log("documents:",coevanForm.getAll("documents"))
    return this.http.post<IHttpResponse<IConvocationCoevanResponseDetail>>(this.url + ConvocationCoevanHelper.API_ROUTES.CREATE_CONVOCATION_COEVAN_POST,coevanForm)
    .pipe(
      map(resp=>{
        response.data=resp.data
        console.log(resp)
        return response
      }),
      catchError(this.postCreateConvocationCoevanError)
    )
  }
}
