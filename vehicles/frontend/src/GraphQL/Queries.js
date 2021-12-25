import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      ARAIMileage
      TransmissionType
      bhp
    }
  }
`;