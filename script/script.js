$(document).ready(function() {
    $('#consulta-form').on('submit', function(e) {
        e.preventDefault();

        let cnpj = $('#cnpj').val().replace(/\D/g, '');

        if (cnpj.length === 14) {
            $.ajax({
                url: `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`,
                type: 'GET',
                success: function(data) {
                    displayResult(data);
                    $('#new-search-button').show(); // Mostra o botão de nova pesquisa
                },
                error: function() {
                    $('#resultado').html('<p>Erro ao buscar dados. Verifique o CNPJ e tente novamente.</p>');
                }
            });
        } else {
            $('#resultado').html('<p>Digite um CNPJ válido.</p>');
        }
    });

    function displayResult(data) {
        let companyInfo = `
            <h2 contenteditable="true" class="editable">${data.nome_fantasia || 'Nome não informado'}</h2>
            <p><strong>Razão Social:</strong> <span contenteditable="true" class="editable">${data.razao_social}</span></p>
            <p><strong>Data de Abertura:</strong> <span contenteditable="true" class="editable">${data.data_inicio_atividade}</span></p>
            <p><strong>Situação:</strong> <span contenteditable="true" class="editable">${data.situacao_cadastral}</span></p>
            <p><strong>Atividade Principal:</strong> <span contenteditable="true" class="editable">${data.cnae_fiscal_descricao}</span></p>
            <p><strong>Endereço:</strong> <span contenteditable="true" class="editable">${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio}, ${data.uf}, ${data.cep}</span></p>
            <p><strong>Telefone:</strong> <span contenteditable="true" class="editable">${data.ddd_telefone_1 || 'Não informado'}</span></p>
            <p><strong>E-mail:</strong> <span contenteditable="true" class="editable">${data.email || 'Não informado'}</span></p>
            <h3>Sócios</h3>
        `;

        data.qsa.forEach(function(socio) {
            companyInfo += `
                <div class="card">
                    <p><strong>Nome:</strong> <span contenteditable="true" class="editable">${socio.nome_socio}</span></p>
                    <p><strong>Cargo:</strong> <span contenteditable="true" class="editable">${socio.qualificacao_socio}</span></p>
                </div>
            `;
        });

        companyInfo += '<button id="save-button">Salvar Alterações</button>';
        $('#resultado').html(companyInfo);

        $('#save-button').on('click', function() {
            saveData();
        });
    }

    function saveData() {
        let editedData = {};
        $('.editable').each(function() {
            let field = $(this).text();
            editedData[$(this).attr('class').split(' ')[1]] = field;
        });
        alert('Dados salvos com sucesso:', editedData);
       
    }

    $('#nConsult').click(function() {
        location.reload(true);
    });
    

   
});