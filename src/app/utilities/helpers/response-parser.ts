import { Observable, OperatorFunction, map } from "rxjs";
import { RequestResponse } from "../interfaces";


export default function parseResponse(observable: Observable<Response>) {
    return observable.pipe(map<Response, RequestResponse>((response: Response, index: number) => {
        return <RequestResponse>{
            status: response.status >= 200 && response.status <=299,
            code: response.status,
            title: response.statusText,
            message: response.statusText,
            data: response
        };
    }));
}

