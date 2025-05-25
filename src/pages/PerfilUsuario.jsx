import { useState } from "react";
import { Link } from "react-router";
import { Navegacion } from "../components/PerfilUsuario/Navegacion";
import { DatosPersonales } from "../components/PerfilUsuario/DatosPersonales";
import { Pedidos } from "../components/PerfilUsuario/Pedidos";
import { Direcciones } from "../components/PerfilUsuario/Direcciones";

// Datos de ejemplo (sin tipos)
const mockUserData = {
    id: "usr_123456",
    name: "María",
    lastName: "González",
    email: "maria.gonzalez@ejemplo.com",
    phone: "+56 9 1234 5678",
    documentType: "DNI",
    documentNumber: "12345678-9",
    birthDate: "1990-05-15",
    profileImage: "/placeholder.svg?height=200&width=200",
    addresses: [
        {
            id: 1,
            type: "Casa",
            street: "Av. Providencia",
            number: "1234",
            city: "Santiago",
            state: "Región Metropolitana",
            zipCode: "7500000",
            isDefault: false,
        },
        {
            id: 2,
            type: "Trabajo",
            street: "Av. Las Condes",
            number: "5678",
            city: "Santiago",
            state: "Región Metropolitana",
            zipCode: "7550000",
            isDefault: true,
        },
        {
            id: 3,
            type: "Verano",
            street: "Av. del Mar",
            number: "910",
            city: "La Serena",
            state: "Región de Coquimbo",
            zipCode: "1700000",
            isDefault: false,
        },
    ],
    orders: [
        {
            id: "ORD-2023-001",
            date: "2023-05-10",
            status: "completed",
            items: [
                {
                    id: 1,
                    title: "Los juegos del hambre: Amanecer en la cosecha",
                    price: 7990.9,
                    quantity: 1,
                    image: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
                },
                {
                    id: 2,
                    title: "Cien años de soledad",
                    price: 6590.5,
                    quantity: 1,
                    image: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
                }
                 
            ],
            total: 14581.4,
        },
        {
            id: "ORD-2023-002",
            date: "2023-06-15",
            status: "shipped",
            trackingNumber: "TRACK123456789",
            items: [
                {
                    id: 3,
                    title: "El señor de los anillos: La comunidad del anillo",
                    price: 8990,
                    quantity: 1,
                    image: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
                },
            ],
            total: 8990,
        },
        {
            id: "ORD-2023-003",
            date: "2023-07-20",
            status: "processing",
            items: [
                {
                    id: 4,
                    title: "Harry Potter y la piedra filosofal",
                    price: 6990,
                    quantity: 1,
                    image: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
                },
            ],
            total: 6990,
        },
        {
            id: "ORD-2023-004",
            date: "2023-08-05",
            status: "cancelled",
            items: [
                {
                    id: 5,
                    title: "El principito",
                    price: 5990,
                    quantity: 1,
                    image: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
                },
            ],
            total: 5990,
        },
    ],
};


const usuario = {
  id: "usr_123456",
  nombre: "María",
  apellido: "González",
  correo: "maria.gonzalez@ejemplo.com",
  telefono: "+56 9 1234 5678",
  tipoDocumento: "DNI",
  numeroDocumento: "12345678-9",
  fechaNacimiento: "1990-05-15",
  imagenPerfil: "/placeholder.svg?height=200&width=200",
  direcciones: [
    {
      id: 1,
      tipo: "Casa",
      calle: "Av. Providencia",
      numero: "1234",
      ciudad: "Santiago",
      estado: "Región Metropolitana",
      codigoPostal: "7500000",
      esPredeterminada: false,
    },
    {
      id: 2,
      tipo: "Trabajo",
      calle: "Av. Las Condes",
      numero: "5678",
      ciudad: "Santiago",
      estado: "Región Metropolitana",
      codigoPostal: "7550000",
      esPredeterminada: true,
    },
    {
      id: 3,
      tipo: "Verano",
      calle: "Av. del Mar",
      numero: "910",
      ciudad: "La Serena",
      estado: "Región de Coquimbo",
      codigoPostal: "1700000",
      esPredeterminada: false,
    },
  ],
  pedidos: [
    {
      id: "ORD-2023-001",
      fecha: "2023-05-10",
      estado: "completado",
      numeroSeguimiento: null,
      items: [
        {
          id: 1,
          titulo: "Los juegos del hambre: Amanecer en la cosecha",
          precio: 7990.9,
          cantidad: 1,
          imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
        },
        {
          id: 2,
          titulo: "Cien años de soledad",
          precio: 6590.5,
          cantidad: 1,
          imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
        }
      ],
      total: 14581.4,
    },
    {
      id: "ORD-2023-002",
      fecha: "2023-06-15",
      estado: "enviado",
      numeroSeguimiento: "TRACK123456789",
      items: [
        {
          id: 3,
          titulo: "El señor de los anillos: La comunidad del anillo",
          precio: 8990,
          cantidad: 1,
          imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
        },
      ],
      total: 8990,
    },
    {
      id: "ORD-2023-003",
      fecha: "2023-07-20",
      estado: "procesando",
      numeroSeguimiento: null,
      items: [
        {
          id: 4,
          titulo: "Harry Potter y la piedra filosofal",
          precio: 6990,
          cantidad: 1,
          imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
        },
      ],
      total: 6990,
    },
    {
      id: "ORD-2023-004",
      fecha: "2023-08-05",
      estado: "cancelado",
      numeroSeguimiento: null,
      items: [
        {
          id: 5,
          titulo: "El principito",
          precio: 5990,
          cantidad: 1,
          imagen: "https://www.crisol.com.pe/media/catalog/product/cache/597531f9de47f5e5225ef01cbe4bbd93/9/7/9786125156020_pabc3ngajzvlahd3.jpg",
        },
      ],
      total: 5990,
    },
  ],
};
// Componente para mostrar el estado del pedido

// Componente para mostrar el icono del estado del pedido


export const PerfilUsuario = () => {
    const [userData, setUserData] = useState(mockUserData);
    const [activeTab, setActiveTab] = useState("perfil");
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Función para mostrar detalles de un pedido
    const showOrderDetails = (order) => {
        setSelectedOrder(order);
        console.log("Detalles del pedido seleccionado:", order);
    };

    // Función para volver a la lista de pedidos
    const backToOrderList = () => {
        setSelectedOrder(null);
    };

    const iconos = {
        perfil: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
            </svg>
        ),
        pedidos: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
            </svg>
        ),
        direcciones: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
            </svg>
        ),
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Mi Cuenta</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar de navegación */}
                <Navegacion
                    userData={userData}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    iconos={iconos}
                />

                {/* Contenido principal */}
                <div className="md:col-span-3">
                    {activeTab === "perfil" && (
                        <DatosPersonales userData={userData} />
                    )}

                    {activeTab === "pedidos" && (
                        <Pedidos
                            userData={userData}
                            showOrderDetails={showOrderDetails}
                            backToOrderList={backToOrderList}
                            selectedOrder={selectedOrder}
                        />
                    )}

                    {activeTab === "direcciones" && (
                        <Direcciones userData={userData} />
                    )}
                </div>
            </div>
        </div>
    );
};
