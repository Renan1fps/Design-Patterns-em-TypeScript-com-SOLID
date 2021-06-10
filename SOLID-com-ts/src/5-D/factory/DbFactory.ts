import { IDbContract } from "../contracts/IDbContract";
import { DB } from "../infra/DB";
import { MYySQL } from "../infra/MySQL";
import { PostgreSQL } from "../infra/PostgreSQL";

export class DbFactory {
  private static type: DB = DB.MYSQL;
  public static create(): IDbContract {
    if (DbFactory.type === DB.MYSQL) {
      return new MYySQL();
    } else {
      return new PostgreSQL();
    }
  }
}
