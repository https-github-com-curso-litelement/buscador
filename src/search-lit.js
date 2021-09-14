import { LitElement, html, css } from 'lit-element';

import { status_list, gender_list } from '../catalogs/catalogs';
import { buttonStyle } from 'button/css/button-styles';
import  {cardStyles } from 'card/css/card-styles';
import { inputStyles } from 'input/css/input-styles';
import { selectStyles } from 'select/css/select-styles';
import { generalStyles } from '../css/general-styles';

export class SearchLit extends LitElement {
  static get styles() {
    return [buttonStyle, cardStyles, inputStyles, selectStyles, generalStyles,
    css`.buttonForm{
      height: 25%;
      margin-top: 20px;
    }
    
    .iconForm{
      margin-top: 15px;
    }

    .inputRight{
      margin-right:395px
    }

    .spaceForm{
      margin-top:50px:
    }

    .colorInput{
      background-color: var(--secondary-color);
    }

    .colorSelect{
      background-color: var(--secondary-color);
    }

    img{
      width: 50%;
    }

    .buscador-div{
      margin-left: 110px;
      display: inline-grid;
      grid-template-columns: auto auto auto;
      padding-top:50px;
    }

    .subtitle{
      text-align: left;
      margin-left: 20px;
    }

    .error-search{
      font-size: 40px;
      color: red;
      margin-left: 500px;
    }

    ` ];
  }

  static get properties() {
    return {
      statusList: { type: Array },
      genderList: { type: Array },
      inputType: {type: String},
      placeHolderName: {type: String},
      placeHolderSpecie: {type: String},
      placeHolderType: {type: String},
      placeHolderPage: { type:String },
      viewBoxSearch:  { type:String },
      fillSvgPrimary: { type:String },
      pathSearch: { type:String },
      fillPrimary: { type:String },
      params: {type: Object},
    };
  }

  constructor() {
    super();
    this.statusList = status_list;
    this.genderList = gender_list;
    this.inputType = "text";
    this.placeHolderName = "Nombre del personaje";
    this.placeHolderSpecie = "Ingresa una especie";
    this.placeHolderType = "Ingresa un tipo";
    this.placeHolderPage = "Ingresa una página";
    this.viewBoxSearch = "0 0 236 249";
    this.fillSvgPrimary = "none"
    this.pathSearch = "M230.411 213.838L176.153 155.897C185.372 140.226 190.722 121.703 190.722 101.824C190.722 45.585 148.026 0 95.3592 0C42.6927 0 0 45.585 0 101.824C0 158.066 42.6907 203.646 95.3592 203.646C115.619 203.646 134.384 196.883 149.826 185.391L203.438 242.642C207.163 246.616 212.047 248.595 216.925 248.595C221.808 248.595 226.686 246.616 230.417 242.642C237.862 234.684 237.862 221.794 230.411 213.838ZM95.3592 170.657C59.7614 170.657 30.901 139.842 30.901 101.829C30.901 63.8152 59.7614 32.9981 95.3592 32.9981C130.959 32.9981 159.818 63.8152 159.818 101.829C159.818 139.842 130.959 170.657 95.3592 170.657Z"
    this.fillPrimary = "#73D0FB";
    this.params = {
      name:'',
      status:'',
      species: '',
      type:'',
      gender:'',
      page:''
    }
  }

/*   connectedCallback() {
    super.connectedCallback()
  
    this.searchParams()
  } */
  

  render() {
    return html`
      <card class="card grid-column-12">
        <div class="grid-rows-2">
          <div class="grid-column-4">
            <div-input>
              <input
              id="name"
                class="colorInput"
                .type="${this.inputType}"
                .placeholder="${this.placeHolderName}"
              />
              <div class="space"></div>
              <span class="error-msg" id="error"></span>
            </div-input>

            <div-select>
              <div class="space"></div>
              <select class="colorSelect" id="status">
                ${this.statusList.map(
                  (statu) => html`
                    <option value="${statu.value}">${statu.text}</option>
                  `
                )}
              </select>
              <div class="space"></div>
              <span class="error-msg" id="error"></span>
            </div-select>

            <div-input>
              <input
              id="species"
                class="colorInput"
                .type="${this.inputType}"
                .placeholder="${this.placeHolderSpecie}"
              />
              <div class="space"></div>
              <span class="error-msg" id="error"></span>
            </div-input>

            <div-input>
              <input
              id="type"
                class="colorInput"
                .type="${this.inputType}"
                .placeholder="${this.placeHolderType}"
              />
              <div class="space"></div>
              <span class="error-msg" id="error"></span>
            </div-input>
          </div>
        
          <div class="grid-column-4">
            <div-select>
              <div class="space"></div>
              <select class="colorSelect" id="gender">
                ${this.genderList.map(
                  (gender) => html`
                    <option value="${gender.value}">${gender.text}</option>
                  `
                )}
              </select>
              <div class="space"></div>
              <span class="error-msg" id="error"></span>
            </div-select>
            <div-input>
            <input
              id="page"
              class="colorInput inputRight"
              .type="${this.inputType}"
              .placeholder="${this.placeHolderPage}"
            />
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
          </div-input>
          <button-secondary class="button-primary buttonForm" @click="${this.cleanParams}">Limpiar</button-secondary>
          <icon-search class="iconForm" @click="${this.searchParams}">
          <svg width="40" height="40" viewBox="${this.viewBoxSearch}" fill="${this.fillSvgPrimary}" >
          <path d="${this.pathSearch}" fill="${this.fillPrimary}"/>
          </svg>
          </icon-search>
  
          </div>
        </div>
      </card>
      <br><br>
      <div id="buscador"></div>
      <div id="error-search" class="grid-column-12 error-search"></div>
    `;
  }

searchParams(){

  this.params.name = this.shadowRoot.querySelector("#name").value;
  
  if(this.params.status){
    this.params.status = this.shadowRoot.querySelector("#status").value;
  }

  this.params.species = this.shadowRoot.querySelector("#species").value;
 
  this.params.type = this.shadowRoot.querySelector("#type").value;

  if(this.params.gender){
    this.params.gender = this.shadowRoot.querySelector("#gender").value;
  }

  this.params.page = this.shadowRoot.querySelector("#page").value;
  
  const url = `https://rickandmortyapi.com/api/character/?name=${this.params.name}&status=${this.params.status}&species=${this.params.species}&type=${this.params.type}&gender=${this.params.gender}&page=${this.params.page}`

  fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado =>{

      console.log(resultado)
      console.log(resultado.results)
      this.clean()
      if(resultado.results){
        resultado.results.forEach(element => {
          console.log('foreach', element.name)
          
          this.shadowRoot.getElementById("buscador").innerHTML += `
          <div class="buscador-div">
          <card-album class="card-album">
          <img src=${element.image}>
            <p class="title">${element.name}</p>
            <p class="subtitle">Status: ${element.status}</p>
            <p class="subtitle">Species: ${element.species}</p>
            <p class="subtitle">Type: ${element.type}</p>
            <p class="subtitle">Gender: ${element.gender}</p>
          </card-album>
          </div>
       
          `;
  
      });
      }else{
      
        this.shadowRoot.getElementById("error-search").innerHTML = 'NO HAY RESULTADOS';
        setTimeout(()=>{
          this.shadowRoot.getElementById("error-search").innerHTML = '';
        }, 1000)
      }
      
    })
}

  clean(){
    this.shadowRoot.querySelector("#buscador").innerHTML = "";
  }

  cleanParams(){
    this.shadowRoot.querySelector("#name").value = '';
    this.shadowRoot.querySelector("#status").value = '';
    this.shadowRoot.querySelector("#species").value = '';
    this.shadowRoot.querySelector("#type").value = '';
    this.shadowRoot.querySelector("#gender").value = '';
    this.shadowRoot.querySelector("#page").value = '';
  }

}

customElements.define('search-lit', SearchLit);