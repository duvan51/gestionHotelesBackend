import db from '../models/index.js';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-express';

const JWT_SECRET = "asdasdsadaswqqeq21"; // clave secreta de desarrollo

const resolvers = {
    Query: {
        getUsers: async () => {
          try {
            const users = await db.User.findAll({
              include: [
                {
                  model: db.Reservas,
                  as: 'Reservas',
                  include: {
                    model: db.ReservaAlojamiento,
                    as: 'ReservaAlojamientos',
                    include: {
                      model: db.TypeOfHabitacion,
                      as: 'typeOfHabitacion',
                    }
                  }
                },
                {
                  model: db.Alojamientos,
                  as: 'Alojamientos',
                  include: {
                    model: db.TypeOfHabitacion,
                    as: 'typeOfHabitacion'
                      }
                },


              ]
                
                
            }); // Consulta todos los usuarios en la base de datos
            //console.log("estos son los usuarios =>", users)
            return users; // Devuelve la lista de usuarios
          
          } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error; // Maneja el error si ocurre
          }
        },
        getUser: async (_, __,{user, db}) => {
          console.log("este es el auth =>",user)
          if(!user){
            throw new Error("not authenticated")
          }
          try {
            const userAuthen = await db.User.findByPk(user.userId,{
              include: [
                {
                  model: db.Reservas,
                  as: 'Reservas',
                  include: {
                    model: db.ReservaAlojamiento,
                    as: 'ReservaAlojamientos',
                    include: {
                      model: db.TypeOfHabitacion,
                      as: 'typeOfHabitacion',
                    }
                  }
                },
                {
                  model: db.Alojamientos,
                  as: 'Alojamientos',
                  include: {
                    model: db.TypeOfHabitacion,
                    as: 'typeOfHabitacion',
                    include: [
                      {
                        model: db.Beneficios,
                        as:"beneficios"
                      }
                    ]
                      }
                },


              ]
            }); // Consulta todos los usuarios en la base de datos
            console.log("estos son los usuarios =>", userAuthen)
            return userAuthen; // Devuelve la lista de usuarios
            
          
          } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error; // Maneja el error si ocurre
          }
        },
        getUserById: async(_, {id}) =>{
          try {
            const user = await db.User.findByPk(id, {
              include: [
                {
                  model: db.Reservas,
                  as: 'Reservas',
                  include: {
                    model: db.ReservaAlojamiento,
                    as: 'ReservaAlojamientos',
                    include: {
                      model: db.TypeOfHabitacion,
                      as: 'typeOfHabitacion',
                      
                    }
                  }
                },
                {
                  model: db.Alojamientos,
                  as: 'Alojamientos',
                  include: {
                    model: db.TypeOfHabitacion,
                    as: 'typeOfHabitacion',
                    include: [
                      {
                        model: db.Beneficios,
                        as:"beneficios"
                      }
                    ]
                      }
                },


              ]

            });
            if(!user){
              throw new Error("usuario no encontrado")
            }
            return user;
          } catch (error) {
            console.log("error al obterner el usuario ", error)
            throw new Error("error al obtener los datos")

            
          }
        },

        getAlojamientos: async () =>{
          try{
            const alojamientos = await db.Alojamientos.findAll({
              include: {
                model: db.TypeOfHabitacion,
                as: 'typeOfHabitacion'
              }
            });
            if(!alojamientos){
              throw new Error("alojamientos no encontrados")
            }
           // console.log("estos son los alojamientos => ", alojamientos )
            return alojamientos;
          }catch (error){
            console.error('tienes un error', error)
            throw error;
          }
        },
        getAlojamientoById: async (_, {id}) =>{
          try{
            const alojamiento = await db.Alojamientos.findByPk(id, {
              include: [{
                model: db.TypeOfHabitacion,
                as: 'typeOfHabitacion',
                include: [
                  {
                    model: db.Beneficios,
                    as:"beneficios"
                  }
                ]
              },
              {
                model: db.Reservas,
                as: 'reservas',
                include: {
                  model: db.ReservaAlojamiento,
                  as: 'ReservaAlojamientos',
                  include: {
                    model: db.TypeOfHabitacion,
                    as: 'typeOfHabitacion',
                  }
                }
              }
            ]
            });
            if(!alojamiento){
              throw new Error("alojamientos no encontrados")
            }
           // console.log("estos son los alojamientos => ", alojamientos )
            return alojamiento;
          }catch (error){
            console.error('tienes un error', error)
            throw error;
          }
        },

        getTypeOfHabitacion: async () => {
          try {

            const typeOfHabitacion = await db.TypeOfHabitacion.findAll({
              include: [
                {
                  model: db.Beneficios,
                  as:"beneficios"
                }
              ]
            }); // Consulta todos los usuarios en la base de datos
            //console.log("estos son los usuarios =>", users)
           // console.log(db)
            return typeOfHabitacion; // Devuelve la lista de usuarios
          
          } catch (error) {
            console.error('Error al obtener tipo de habitacion', error);
            throw error; // Maneja el error si ocurre
          }
        },

        getReservas: async () => {
          try {

            const reservas = await db.Reservas.findAll({
              include:{
                model: db.ReservaAlojamiento,
                as: 'ReservaAlojamientos',
              }
            });
            if(!reservas){
              throw new Error("Reservas no encontradas")
            }
            return reservas; // Devuelve la lista de usuarios
          
          } catch (error) {
            console.error('Error al obtener tipo de habitacion', error);
            throw error; // Maneja el error si ocurre
          }
        },
        getReservasById: async (parent, { id }, { db }) => {
          console.log(db.Reservas)
     
          try {
            const reservaId = await db.Reservas.findByPk(id ,{
              include: {
                model: db.ReservaAlojamiento,
                as: 'ReservaAlojamientos',
              }
            }); 
            if(!reservaId){
              throw new Error("alojamiento no encontrado")
            }
            return reservaId; // Devuelve la lista de usuarios
          
          } catch (error) {
            console.error('Error al obtener tipo de habitacion', error);
            throw error; // Maneja el error si ocurre
          }
        },
        getReservaAlojamiento: async () => {
          try {

            const ReservaAlojamiento = await db.ReservaAlojamiento.findAll({
              include: {
                model: db.TypeOfHabitacion,
                as: 'typeOfHabitacion',
              }
            });
            if(!ReservaAlojamiento){
              throw new Error("No encontrados")
            }
            return ReservaAlojamiento; // Devuelve la lista de usuarios
          
          } catch (error) {
            console.error('Error al obtener Reserva Alojamiento', error);
            throw error; // Maneja el error si ocurre
          }
        },

        getReservaAlojamientoById: async(_, {id}) =>{
          try {
            const ReservaAlojamiento = await db.ReservaAlojamiento.findByPk(id, {
              include: {
                model: db.TypeOfHabitacion,
                as: 'typeOfHabitacion',
              }
            });
            if(!ReservaAlojamiento){
              throw new Error("usuario no encontrado")
            }
            return ReservaAlojamiento;
          } catch (error) {
            console.log("error al obterner el usuario ", error)
            throw new Error("error al obtener los datos")

            
          }
        },

        getBeneficio: async(_, { id })=> {
          try {
            const Beneficio = await db.Beneficios.findByPk(id)
            if(!Beneficio){
              throw new Error("beneficio no encontrado")
            }
            return Beneficio;
          } catch (error) {
            console.log("error al obterner el Beneficio ", error)
            throw new Error("error al obtener los datos")
            
          }
        },
        getBeneficios: async()=> {
          try {
            const Beneficios = await db.Beneficios.findAll();
            return Beneficios;
          } catch (error) {
            console.log("error al obterner el Beneficio ", error)
            throw new Error("error al obtener los datos")
            
          }
        }
    },






    Mutation: {
      login : async (_, {email, password}) => {
        try {
          const user = await db.User.findOne({ where : {email}});

          if(!user){
            throw new Error('usuario no encontrado');
          }
          console.log('Proporcionada:', password, 'Tipo:', typeof password);
          console.log('Almacenada:', user.password, 'Tipo:', typeof user.password);
          const isMatch = await argon2.verify(user.password, password );
         // console.log(isMatch)
          
          if(!isMatch){
            throw new Error ('Contrasena incorrecta del usuario =>' + user.email)
          }
          
         const token = jwt.sign({ userId: user.id}, JWT_SECRET, {
            expiresIn: '1h'
          })  

          //console.log(token)

          return {
            token,
            user
          };
        } catch (error) {
          console.log('error al inciar sesion', error)
          throw error;
        }
      },
      createUser: async (_, { Name, lastName, dateBirth, historySearch, identificacion, email, photo, password}) => {
        try {
         
          const hashedPassword = await argon2.hash(password);
          console.log("contrasena hasheada", hashedPassword)
          const user = await db.User.create({
            Name, 
            lastName,
            dateBirth, 
            historySearch, 
            identificacion, 
            email, 
            photo, 
            password: hashedPassword
          });
          return user;
        } catch (error) {
          console.log('error al crear usuario: ', error)
          throw error;
        }
      },
      createAlojamientos: async (_, { 
        title, 
        description, 
        imagePrincipal, 
        images, 
        ubicacion, 
        pais, 
        departamento, 
        ciudad, 
        numberPhone,
        whattsap, 
        habitaciones_type_id_fk,
        alojamientos_type_id_fk,
        userId }) => {
        try {
         
          const alojamientos = await db.Alojamientos.create({
            title,
            description,
            imagePrincipal,
            images,
            ubicacion,
            pais,
            departamento,
            ciudad,
            numberPhone,
            whattsap,
            habitaciones_type_id_fk,
            alojamientos_type_id_fk,
            userId
          });
          console.log(alojamientos)
          return alojamientos;
        } catch (error) {
          console.log('error al crear usuario: ', error)
          throw error;
        }
      },
      createTypeOfHabitacion: async (_, { 
        numberHabitacions,
        nameOfHabitacion,
        numbersCama,
        price,
        alojamientoId,
        beneficiosId,
       }) => {
        try {     
          const roomAlojamientos = await db.TypeOfHabitacion.create({
       numberHabitacions,
        nameOfHabitacion,
        numbersCama,
        price,
        alojamientoId,
        beneficiosId
          });
          console.log(roomAlojamientos)

          // Si `beneficiosId` es un array, usa `addBeneficios` para asociar múltiples beneficios
    if (Array.isArray(beneficiosId)) {
      await roomAlojamientos.addBeneficios(beneficiosId);
    } else {
      // Si `beneficiosId` es un único ID, usa `addBeneficio` para asociar un solo beneficio
      await roomAlojamientos.addBeneficio(beneficiosId);
    }

    return roomAlojamientos;
        } catch (error) {
          console.log('error al crear usuario: ', error)
          throw error;
        }
      },


      createBeneficio : async(_, {
        description,
        iconoPrincipal,
        imagePrincipal,
        title

      }) =>{
        try {
          const createBeneficio = await db.Beneficios.create({
            description,
            iconoPrincipal,
            imagePrincipal,
            title
          })

          return createBeneficio;
          
        } catch (error) {
          console.log('error al crear usuario: ', error)
          throw error;
        }
      },







      
      
      deleteTypeOfHabitacion: async (_, {id}, {db}) =>{
        try {
          const result = await db.TypeOfHabitacion.destroy({where: {id}});
          return result > 0;
        } catch (error) {
          console.log('error al eliminar Habitacion', error)
          return false;
        }
      },
      deleteAlojamientos: async (_, {id}, {db}) =>{
        try {
          const result = await db.Alojamientos.destroy({where: {id}});
          return result > 0;
        } catch (error) {
          console.log('error al eliminar Habitacion', error)
          return false;
        }
      },


      createReserva: async (_, { payment, birthCheking, birthCheckout, daysAlojamientos, paymentTotal, userId, alojamientoId, status, reserva, habitaciones }, { db }) => {
        try {
          // Crear la reserva principal
          const reserva = await db.Reservas.create(
            {
              
              payment,
              birthCheking,
              birthCheckout,
              daysAlojamientos,
              paymentTotal,
              userId,
              alojamientoId,
              status,
              reserva
            },
          );
          console.log(reserva)
          return reserva; 
        } catch (error) {
          // Rollback la transacción en caso de error

          console.error(error);
          throw new ApolloError('Error al crear la reserva');
        }
      },
      createReservaAlojamiento: async (_, { reservaId, price, daysReserva, id_habitacion,alojamientoId,birthCheking, birthCheckout}, { db }) => {
        try {
          // Crear la reserva principal
          const reservaAlojamiento = await db.ReservaAlojamiento.create(
            {
              reservaId,
              price,
              daysReserva,
              id_habitacion,
              alojamientoId,
              birthCheking,
              birthCheckout
            },
          );
          return reservaAlojamiento; 
        } catch (error) {
          // Rollback la transacción en caso de error
          console.error(error.message);
          throw new ApolloError('Error al crear la reserva');
        }
      },
    },
   
  
}
export default resolvers;