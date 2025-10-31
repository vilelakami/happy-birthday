# 🎁 happy-birthday-mom: O Presente Glitch

Este é um website construído com React.js para um presente de aniversário especial, apresentando uma contagem regressiva totalmente customizada com tema Cyberpunk/Glitch. O projeto é totalmente responsivo e animado.

---

## ✨ Funcionalidades

* **Contagem Regressiva Detalhada:** Exibe Dias, Horas, Minutos e Segundos até a data do aniversário.
* **Modo Aniversário:** Altera a tela no dia do aniversário para uma mensagem de "Feliz Aniversário!" com animação de digitação e efeito de pulsação Arco-Íris Neon.
* **Efeito de Fundo Glitch:** Fundo dinâmico e animado com caracteres aleatórios (efeito *Matrix*).
* **Design Responsivo:** O layout se adapta perfeitamente a dispositivos móveis (celulares e tablets).

## 🎨 Tecnologia Utilizada

* **Frontend:** React.js (Create React App)
* **Estilização:** CSS3 puro (com `keyframes` para as animações)
* **Bibliotecas:**
    * `react-countdown`: Para o gerenciamento da contagem regressiva.

---

## 🚀 Como Executar o Projeto Localmente

Siga estas instruções para rodar o site no seu computador.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vilelakami/happy-birthday-mom.git](https://github.com/vilelakami/happy-birthday-mom.git)
    cd happy-birthday-mom/site-aniversario
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    O site abrirá automaticamente em `http://localhost:3000`.

## 🌐 Deploy (Publicação)

O projeto foi publicado gratuitamente utilizando o **Vercel**.

**Status Atual:**
[![Ready](https://happy-anniversary-cnn0fdr3m-kamis-projects-4f6055e6.vercel.app)](happy-anniversary-m.vercel.app)

---

## 💡 Como Testar o Modo Aniversário

Para forçar a mensagem "FELIZ ANIVERSÁRIO!", edite temporariamente o arquivo `src/ContagemRegressiva.js` e a função `getProximaDataAniversario` para retornar uma data que já passou.

```javascript
// CÓDIGO DE TESTE
const getProximaDataAniversario = () => {
    const hoje = new Date();
    // Força o alvo para 1 segundo no passado
    return new Date(hoje.getTime() - 1000); 
};
