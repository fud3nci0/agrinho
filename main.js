

function comprar() {
    const width = 800;
    const height = 600;
    const left = (screen.width/2)-(width/2);
    const top = (screen.height/2)-(height/2);
    window.open('pagamento.html','pagamento',`width=${width}, height=${height}, top=${top}, left=${left}`);

}

const baseProdutos = [

    { id: 1, name: 'Product 1', price: 10 },
    ];

    function adicionar(produtoId) {
        const produto = baseProdutos.find(p => p.id === produtoId);
        if (produto) {
        let pagar = JSON.parse(localStorage.getItem('pagamento')) ||
        
        [];
        
        pagar.push(produto);
        localStorage.setItem('pagamento', JSON.stringify(pagar));
        alert('Produto adicionado ao carrinho!');
        }
        }