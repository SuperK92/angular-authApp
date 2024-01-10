
import { User } from "./user.iterface";

export interface CheckTokenResponse {
  user:  User;
  token: string;
}
