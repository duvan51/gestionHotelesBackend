import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    Name: String!
    lastName: String!
    dateBirth: String!
    historySearch: String!
    identificacion: String!
    email: String!
    photo: String!
    password: String!
    Alojamientos: [Alojamientos]
    Reservas: [Reserva]
  }

  type Alojamientos {
    id: ID!
    title: String!
    description: String!
    imagePrincipal: String!
    images: String!
    ubicacion: String!
    pais: String!
    departamento: String!
    ciudad: String!
    numberPhone: String!
    habitaciones_type_id_fk: Int!
    alojamientos_type_id_fk: Int!
    whattsap: String!
    userId: Int!
    typeOfHabitacion: [TypeOfHabitacion]
    reservas: [Reserva]
  }

  type TypeOfHabitacion {
    id: ID!
    numberHabitacions: Int!
    nameOfHabitacion: String!
    numbersCama: Int!
    price: String!
    alojamientoId: String!
    reservaAlojamientoId: String!
    ReservaAlojamiento: ReservaAlojamiento
  }


  type Reserva {
    id: ID!
    payment: Int!
    birthCheking: String!
    birthCheckout: String!
    daysAlojamientos: Int!
    paymentTotal: Int!
    userId: Int!
    alojamientoId: Int!
    status: String!
    ReservaAlojamientos: [ReservaAlojamiento]
  }

  type ReservaAlojamiento {
    id: ID!
    reservaId: Int!
    id_habitacion: Int!
    price: String!
    daysReserva: Int!
    alojamientoId: String!
    reserva: Reserva
    typeOfHabitacion: [TypeOfHabitacion]
  }


  type Query {
    getReservas: [Reserva]
    getReservasById(id: ID!): Reserva

    getUserById(id: ID!): User
    getUsers: [User]
    getUser: User

    getAlojamientoById(id: ID!): Alojamientos
    getAlojamientos: [Alojamientos]
    
    getTypeOfHabitacion: [TypeOfHabitacion]
    
    getReservaAlojamiento: [ReservaAlojamiento]
  }

  type AuthPayload {
    token: String!
    user: User!
  }
  input ReservaAlojamientoInput {
    daysReserva: Int!
    id_habitacion: Int!
  }

  type Mutation {
    deleteAlojamientos(id: ID!): Boolean!
    deleteTypeOfHabitacion(id: ID!): Boolean!
    deleteReserva(id: ID!): Boolean!



    login(email: String!, password: String!): AuthPayload
    createUser(
      Name: String!
      lastName: String!
      dateBirth: String!
      historySearch: String!
      identificacion: String!
      email: String!
      photo: String!
      password: String!
    ): User

    createAlojamientos(
      title: String!
      description: String!
      imagePrincipal: String!
      images: String!
      ubicacion: String!
      pais: String!
      departamento: String!
      ciudad: String!
      numberPhone: String!
      habitaciones_type_id_fk: Int!
      alojamientos_type_id_fk: Int!
      whattsap: String!
      userId: Int!
    ): Alojamientos

    createTypeOfHabitacion(
      numberHabitacions: Int!
      nameOfHabitacion: String!
      numbersCama: Int!
      price: String!
      alojamientoId: String!
    ): TypeOfHabitacion

    createReserva(
      payment: Int!
      birthCheking: String!
      birthCheckout: String!
      daysAlojamientos: Int!
      paymentTotal: Int!
      userId: Int!
      alojamientoId: Int!
      status: String!
    ): Reserva

    createReservaAlojamiento(
      reservaId: Int!
      id_habitacion: Int!
      price: String!
      daysReserva: Int!
      alojamientoId: String!
    ): ReservaAlojamiento
  }
`;

export default typeDefs;
