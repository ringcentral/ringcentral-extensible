import Authorize from "./Authorize/index.js";
import Userinfo from "./Userinfo/index.js";
import Wstoken from "./Wstoken/index.js";
import Revoke from "./Revoke/index.js";
import Token from "./Token/index.js";
import Jwks from "./Jwks/index.js";
import { ParentInterface, RingCentralInterface } from "../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/oauth`;
  }

  public jwks(): Jwks {
    return new Jwks(this);
  }

  public token(): Token {
    return new Token(this);
  }

  public revoke(): Revoke {
    return new Revoke(this);
  }

  public wstoken(): Wstoken {
    return new Wstoken(this);
  }

  public userinfo(): Userinfo {
    return new Userinfo(this);
  }

  public authorize(): Authorize {
    return new Authorize(this);
  }
}
export default Index;
