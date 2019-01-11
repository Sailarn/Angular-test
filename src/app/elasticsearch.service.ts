import { Injectable } from "@angular/core";
import { Client } from "elasticsearch-browser";
import * as elasticsearch from "elasticsearch-browser";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Constants } from "./models/constant.model";
import { AppState } from "./store/app.state";

import * as Actions from "./store/actions/data.actions";

@Injectable({
  providedIn: "root"
})
export class ElasticsearchService {
  private client: Client;
  data: Observable<Constants[]>;

  constructor(private store: Store<AppState>) {
    if (!this.client) {
      this._connect();
    }
  }
  private _connect() {
    this.client = new elasticsearch.Client({
      host: "localhost:9200",
      log: "trace"
    });
  }
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: 3000,
      body: "Data"
    });
  }
  create(): any {
    return this.client.bulk(
      {
        body: [
          { index: { _index: "db_first", _type: "users_data", _id: 1 } },
          {
            users: [
              {
                id: 1,
                info: {
                  first_name: "Denis",
                  last_name: "Ryabenkiy",
                  birth: "24/10/1997",
                  mobile: "+380960789811",
                  email: "denis9524gmail.com",
                  created: "09.01.2019, 12:56:37"
                }
              }
            ]
          }
        ]
      },
      (err, resp) => {
        this.retrive();
      }
    );
  }
  update(data): any {
    return this.client.bulk(
      {
        body: [
          { index: { _index: "db_first", _type: "users_data", _id: 1 } },
          {
            users: data
          }
        ]
      },
      function(err, resp) {
        console.log(err, resp);
      }
    );
  }
  retrive(): any {
    return this.client.get(
      {
        index: "db_first",
        type: "users_data",
        id: 1
      },
      (err, resp) => {
        if (err) {
          console.log("mistake");
          this.create();
        } else {
          console.log("connected");
          this.store.dispatch(new Actions.retrieveData(resp._source));
          this.store.select("appData").subscribe();
        }
      }
    );
  }
}
