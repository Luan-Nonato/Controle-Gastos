
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

  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#d63384', fontSize: '2rem', marginBottom: '2rem' }}>Painel de Gastos da Gabi 💸</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {gastos.map((gasto, index) => (
          <div key={index} style={{ backgroundColor: '#ffe6eb', padding: '1rem', borderRadius: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#c2185b', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{gasto.titulo}</h2>
            <p style={{ margin: 0 }}>💰 Valor: R$ {gasto.valor}</p>
            <p style={{ margin: 0 }}>📌 Tipo: {gasto.tipo}</p>
            <p style={{ margin: 0 }}>🗓️ Frequência: {gasto.frequencia}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#ffd1dc', borderRadius: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem', color: '#880e4f' }}>
        Total de Gastos: R$ {total}
      </div>
    </div>
  );
}
