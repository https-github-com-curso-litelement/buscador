import { css } from 'lit-element';

export const generalStyles = css`
.container{
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 20px;
}

.grid-column-12{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
    column-gap: 15px;
}

.grid-column-8{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    column-gap: 15px;
}

.grid-column-6{
    display:grid;
    grid-template-columns: auto auto auto auto auto auto;
    column-gap: 15px;
}

.grid-column-4{
    display:inline-grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 15px;
}

.grid-column-2{
    display:grid;
    grid-template-columns: auto auto auto;
    column-gap: 15px;
}

.grid-column-1{
    display:grid;
    grid-template-columns: auto;
    column-gap: 15px;
}

.grid-rows-2{
    display:grid;
    grid-template-rows: auto auto;
}

`
