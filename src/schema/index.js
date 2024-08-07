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
    beneficios: [Beneficios]
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
    birthCheking: String!
    birthCheckout: String!
    reservaId: Int!
    id_habitacion: Int!
    price: String!
    daysReserva: Int!
    alojamientoId: String!
    reserva: Reserva
    typeOfHabitacion: [TypeOfHabitacion]
  }

  type Beneficios {
    id: ID!
    title: String!
    description: String!
    imagePrincipal: String!
    iconoPrincipal: String!

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
    getReservaAlojamientoById(id: ID!): ReservaAlojamiento


    getBeneficio(id: ID!): Beneficios
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

    createBeneficio(
      description: String!
      title:String!
      imagePrincipal:String!
      iconoPrincipal:String!
    ): Beneficios

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
      birthCheking: String!
      birthCheckout: String!

    ): ReservaAlojamiento
  }
`;

export default typeDefs;
