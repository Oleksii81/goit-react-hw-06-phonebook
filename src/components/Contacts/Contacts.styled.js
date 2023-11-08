import { styled } from "styled-components";


export const ContactsStyle = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
    margin-bottom: 160px;
    .list{
        margin: 0;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .list-name{
        margin: 0;
        margin-right: 10px;
    }
    .list-number{
        margin: 0;
        margin-right: 20px;
    }
    .btn { 
        display: inline-block;
        display: inline;
        margin-left: auto;
        zoom: 1; 
        padding: 4px 10px 4px; 
        margin-bottom: 0; 
        font-size: 13px; 
        line-height: 18px; 
        color: #333333; 
        text-align: center;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); 
        vertical-align: middle; 
        background-color: #f5f5f5; 
        border-color: #e6e6e6 #e6e6e6 #e6e6e6; 
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); 
        border: 1px solid #e6e6e6; 
        border-radius: 4px; 
        cursor: pointer; 
        *margin-left: .3em; 
    }
    .btn-large { 
        padding: 5px; 
        font-size: 13px; 
        line-height: normal; 
        border-radius: 5px; 
    }
    .btn:hover { 
        color: #333333;
        text-decoration: none;  
        background-color: #e6e6e6; 
        background-position: 0 -15px; 
    }
    .btn-primary, .btn-primary:hover { 
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
        color: #ffffff; 
    }
    .btn-primary { 
        background-color: #4a77d4;   
        border: 1px solid #3762bc; 
        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); 
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); 
    }
    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ 
        filter: none; 
        background-color: #5549b2;
    }
    .btn-block { 
        width: 60px; 
        height: 25px;
        display: block; 
    }
`