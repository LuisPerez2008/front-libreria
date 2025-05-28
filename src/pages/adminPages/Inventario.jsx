import { useState } from "react";
import "../../CSS/inventario.css";

export const Inventario = () => {
   const [productos, setProductos] = useState([
    { id: 1, nombre: "El psicoanalista", editorial: "Vintage", stock: 18, precio: 48.00, categoria: "Novela" },
    { id: 2, nombre: "Los juegos del hambre", editorial: "Vintage", stock: 25, precio: 79.90, categoria: "Ciencia ficción" },
    { id: 3, nombre: "El infinito en un junco", editorial: "Turner", stock: 7, precio: 56.00, categoria: "Historia" },
    { id: 4, nombre: "Moby Dick", editorial: "Alianza", stock: 34, precio: 35.00, categoria: "Clásico" }
  ]);

  const [nuevo, setNuevo] = useState({
    nombre: '',
    editorial: '',
    stock: '',
    precio: '',
    categoria: '',
  });

  const [modoEditar, setModoEditar] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [contadorId, setContadorId] = useState(5);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  function handleChange(e) {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  }

  function handleEditar(p) {
    setNuevo({
      nombre: p.nombre,
      editorial: p.editorial,
      stock: p.stock,
      precio: p.precio,
      categoria: p.categoria
    });
    setModoEditar(true);
    setIdEditando(p.id);
    setMostrarFormulario(true);
  }

  function handleAgregar() {
    if (
      !nuevo.nombre.trim() ||
      !nuevo.editorial.trim() ||
      !nuevo.categoria.trim() ||
      Number(nuevo.stock) <= 0 ||
      parseFloat(nuevo.precio) <= 0
    ) {
      return;
    }

    if (modoEditar) {
      const actualizados = productos.map(p =>
        p.id === idEditando ? {
          ...p,
          nombre: nuevo.nombre,
          editorial: nuevo.editorial,
          stock: Number(nuevo.stock),
          precio: Math.round(parseFloat(nuevo.precio) * 100) / 100,
          categoria: nuevo.categoria
        } : p
      );
      setProductos(actualizados);
      setModoEditar(false);
      setIdEditando(null);
    } else {
      const id = contadorId;
      setContadorId(contadorId + 1);

      const nuevoProducto = {
        id,
        nombre: nuevo.nombre,
        editorial: nuevo.editorial,
        stock: Number(nuevo.stock),
        precio: Math.round(parseFloat(nuevo.precio) * 100) / 100,
        categoria: nuevo.categoria
      };
      setProductos([...productos, nuevoProducto]);
    }

    setNuevo({ nombre: '', editorial: '', stock: '', precio: '', categoria: '' });
  }

  function handleEliminar(id) {
    const nuevos = productos.filter(p => p.id !== id);
    setProductos(nuevos);
  }

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-inventario">
      <h2>Inventario de Libros</h2>

      <button
        onClick={() => {
          if (modoEditar) {
            setModoEditar(false);
            setIdEditando(null);
            setNuevo({ nombre: '', editorial: '', stock: '', precio: '', categoria: '' });
          }
          setMostrarFormulario(!mostrarFormulario);
        }}
        style={{
          marginBottom: "1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px"
        }}
      >
        {mostrarFormulario ? (modoEditar ? "Cancelar edición" : "Cancelar") : (modoEditar ? "Editar Producto" : "Agregar")}
      </button>

      {mostrarFormulario && (
        <div className="formulario">
          <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} />
          <input name="editorial" placeholder="Editorial" value={nuevo.editorial} onChange={handleChange} />
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={nuevo.stock}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (["e", "E", ".", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            step="1"
            min="0"
          />
          <input
            name="precio"
            type="text"
            placeholder="Precio"
            value={nuevo.precio}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
                setNuevo({ ...nuevo, precio: value });
              }
            }}
            inputMode="decimal"
          />
          <input name="categoria" placeholder="Categoría" value={nuevo.categoria} onChange={handleChange} />
          <button onClick={handleAgregar}>
            {modoEditar ? "Guardar Cambios" : "Añadir"}
          </button>
        </div>
      )}

      <input
        type="text"
        placeholder="Buscar libro..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          margin: '1rem 0',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />

      <table className="tabla-inventario">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Editorial</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.editorial}</td>
              <td>{p.stock}</td>
              <td>S/ {p.precio.toFixed(2)}</td>
              <td>{p.categoria}</td>
              <td>
                <button className="accion-btn" onClick={() => handleEditar(p)}>✏️</button>
                <button className="accion-btn" onClick={() => handleEliminar(p.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  )
}