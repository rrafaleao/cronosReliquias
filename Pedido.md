**Documento de Requisição para Desenvolvimento do Site Institucional - Cronos Relíquias**  

---

### **1. Objetivo do Projeto**  
Criar um site institucional que:  
- Transmita a fusão entre tradição relojoeira e inovação tecnológica  
- Destaque o artesanato de precisão e o valor histórico dos produtos  
- Funcione como plataforma educativa e comercial para entusiastas de horologia  
- Ofereça experiência imersiva com elementos interativos  

---

### **2. Diretrizes de Design**  
**a) Identidade Visual:**  
- Uso estrito da paleta de cores fornecida, com destaque para:  
  - Fundos em **Azul Meia-noite (#191970)** e **Preto Ônix (#0D0D0D)**  
  - Elementos de destaque em **Dourado Antigo (#CFB53B)** e **Cobre Envelhecido (#B87333)**  
- Tipografia:  
  - Títulos: Fontes serifadas (ex: Playfair Display) para referência clássica  
  - Textos: Fontes sans-serif modernas (ex: Lato) para contraste  

**b) Elementos Gráficos:**  
- Ícones inspirados em componentes de relógios (engrenagens, ponteiros)  
- Animações suaves de transição imitando o movimento de mecanismos  
- Bordas e divisores com padrões de trilhos de relógios  

**c) Requisitos de Imagens:**  
- Galeria em altíssima resolução (mín. 3000px de largura para zoom)  
- Sistema de carregamento progressivo para otimização de performance  

---

### **3. Estrutura e Funcionalidades Principais**  

#### **Páginas Obrigatórias**  
| Página          | Conteúdo Principal                                                                 |  
|-----------------|-----------------------------------------------------------------------------------|  
| **Home**        | - Vídeo de apresentação (15-30s) com close-ups de mecanismos<br>- Grid de destaques interativos |  
| **Sobre Nós**   | - Linha do tempo histórica da empresa<br>- Perfis da equipe com hover effects 3D               |  
| **Catálogo**    | - Filtros por período histórico e estilo<br>- Cards com zoom hover e botão "Explorar Mecanismo" |  
| **Serviços**    | - Abas interativas para cada serviço<br>- Calculadora de orçamento básico                     |  
| **Galeria**     | - Slider "Antes/Depois" com controle deslizante<br>- Sistema de tags por década               |  
| **Blog**        | - Layout magazine com artigos destacados<br>- Integração com newsletter                       |  
| **Contato**     | - Mapa 3D estilizado da sede<br>- Formulário inteligente com reconhecimento de consultas       |  

---

### **4. Funcionalidades Técnicas Prioritárias**  

#### **Desafio Obrigatório: Galeria Interativa**  
- **Tecnologia:** CSS3 + JavaScript Vanilla  
- **Recursos:**  
  - Zoom progressivo ao passar o mouse (até 300%)  
  - 4 ângulos de visualização via botões de rotação (0°, 45°, 90°, 135°)  
  - Efeito parallax no scroll para dispositivos móveis  

#### **Desafios Opcionais (Priorização)**  
1. **Seletor de Estilos**  
   - Sistema de troca de cores via seletores em formato de engrenagem  
   - Pré-visualização em tempo real com atualização de preços  

2. **Linha do Tempo Interativa**  
   - Scroll horizontal com snap points  
   - Pop-ups com animação de abertura de relógio ao clicar em eventos  

---

### **5. Especificações Técnicas**  
- **Tecnologias:** HTML5, CSS3, JavaScript ES6+  
- **Framework:** Bootstrap 5 para grid responsivo  
- **Otimização:**  
  - Compressão avançada de imagens (WebP + Lazy Load)  
  - Critical CSS para carregamento prioritário  
- **SEO:**  
  - Schema markup para produtos e artigos  
  - Microdata para especificações técnicas de relógios  

---

**Notas:**  
- Desafios opcionais poderão ser implementados conforme economia nas etapas principais  
- Manutenção pós-lançamento: 3 meses incluídos no pacote  

---

### **6. Entregáveis Esperados**  
1. Site responsivo com todas páginas obrigatórias  
2. Sistema de gerenciamento de conteúdo para blog e catálogo  
3. Relatório de performance (PageSpeed Insights ≥85)  
4. Treinamento básico para atualização de conteúdo  

---

**Anexos:**  
- [ ] Logo em vetor (.ai/.svg)  
- [ ] Conteúdo textual preliminar  
- [ ] Banco de imagens em alta resolução  

*Assinatura do Responsável:*  
___________________________  
*Cronos Relíquias - Onde o passado encontra o futuro*