
export default function Home() {
  const gastos = [{"titulo": "Compras Cart\u00e3o Jennifer", "valor": 470, "tipo": "Parcela", "frequencia": "Mensal"}, {"titulo": "MACA", "valor": 150, "tipo": "Parcela", "frequencia": "Todo dia 20"}, {"titulo": "Compras Jennifer", "valor": 250, "tipo": "Parcela", "frequencia": "Mensal"}, {"titulo": "Unha", "valor": 200, "tipo": "Recorrente", "frequencia": "Mensal"}, {"titulo": "Sobrancelha", "valor": 105, "tipo": "Recorrente", "frequencia": "Mensal"}, {"titulo": "Academia", "valor": 150, "tipo": "Recorrente", "frequencia": "Mensal"}, {"titulo": "Depila\u00e7\u00e3o", "valor": 345, "tipo": "Recorrente", "frequencia": "Mensal"}];
  return (
    <div style={
      padding: '2rem', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
      gap: '1rem'
    }>
      <h1 style={ gridColumn: '1 / -1', textAlign: 'center', color: '#d63384' }>
        💖 Painel de Contas da Jennifer – Abril 2025
      </h1>
      {gastos.map((g, i) => (
        <div key={i} style={
          background: '#ffe0ec',
          borderRadius: '1rem',
          padding: '1rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }>
          <h3 style={marginBottom: '0.5rem'}>{g.titulo}</h3>
          <p>💰 R$ {g.valor}</p>
          <p>📅 {g.frequencia}</p>
          <p>🗂 {g.tipo}</p>
          <p style={color: 'crimson'}>⏰ Pendente</p>
        </div>
      ))}
    </div>
  )
}
