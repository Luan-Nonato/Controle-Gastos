
export default function Home() {
  const gastos = [
    {"titulo": "Compras Cartão Jennifer", "valor": 470, "tipo": "Parcela", "frequencia": "Mensal"},
    {"titulo": "MACA", "valor": 150, "tipo": "Parcela", "frequencia": "Todo dia 20"},
    {"titulo": "Compras Jennifer", "valor": 250, "tipo": "Parcela", "frequencia": "Mensal"},
    {"titulo": "Unha", "valor": 200, "tipo": "Recorrente", "frequencia": "Mensal"},
    {"titulo": "Sobrancelha", "valor": 105, "tipo": "Recorrente", "frequencia": "Mensal"},
    {"titulo": "Academia", "valor": 150, "tipo": "Recorrente", "frequencia": "Mensal"},
    {"titulo": "Depilação", "valor": 345, "tipo": "Recorrente", "frequencia": "Mensal"}
  ];

  return (
    <div style={{
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem'
    }}>
      {gastos.map((gasto, index) => (
        <div key={index} style={{ backgroundColor: '#ffe6eb', padding: '1rem', borderRadius: '1rem', boxShadow: '0 0 10px #f3b6c1' }}>
          <h2 style={{ fontWeight: 'bold' }}>{gasto.titulo}</h2>
          <p>💰 R$ {gasto.valor}</p>
          <p>📅 {gasto.frequencia}</p>
          <p>🗂 {gasto.tipo}</p>
          <p style={{ color: 'red' }}>⏰ Pendente</p>
        </div>
      ))}
    </div>
  )
}
