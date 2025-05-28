import { API_BASE_URL } from "../config/baseURL"
import axios from "axios"



export const getUserData = async () => {
  // Leer usuario del localStorage, pero solo necesitamos el ID para refrescar datos
  const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioLocal?.id) {
    // No hay usuario en localStorage
    return null;
  }

  try {
    // Obtener usuario actualizado por ID desde API
    const { data: usuarioActualizado } = await axios.get(`${API_BASE_URL}/clientes/${usuarioLocal.id}`);

    // Para cada pedido traer detalles
    if (usuarioActualizado.pedidos && usuarioActualizado.pedidos.length > 0) {
      const pedidosConDetalles = await Promise.all(
        usuarioActualizado.pedidos.map(async (pedido) => {
          const res = await axios.get(`${API_BASE_URL}/detalles/pedido/${pedido.id}`);
          const detalles = res.data.map(({ pedido, ...resto }) => resto);
          return {
            ...pedido,
            detalles,
          };
        })
      );
      usuarioActualizado.pedidos = pedidosConDetalles;
    }

    // Opcional: actualizar el localStorage con datos frescos
    localStorage.setItem("usuario", JSON.stringify(usuarioActualizado));

    return usuarioActualizado;
  } catch (error) {
    console.error("Error obteniendo usuario actualizado:", error);
    return null;
  }
};