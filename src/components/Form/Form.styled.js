import { styled } from "styled-components";

export const FormStyle = styled.form`
    width: 400px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
    .label{
        margin-bottom: 20px;
    }
    .input-title{
        font-size:20px;
        position: absolute;
        transform: translateY(-30px);
    }
    .input{
        width: 340px; 
        height: 32px;
        margin-bottom: 30px; 
        background: rgba(0,0,0,0.3);
        border: none;
        outline: none;
        padding: 5px;
        font-size: 20px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
    }
    .input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }
    .btn { 
        display: inline-block;
        display: inline; 
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
        -webkit-border-radius: 4px; 
        -moz-border-radius: 4px; 
        border-radius: 4px; 
        cursor: pointer;
    }
    .btn-large { 
        padding: 9px 14px; 
        font-size: 15px; 
        line-height: normal;  
        border-radius: 5px; 
    }
    .btn:hover { 
        color: #333333;
        text-decoration: none;  
        background-color: #5549b2; 
        background-position: 0 -15px; 
        transition: background-position 0.1s linear;
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
        width: 200px; 
        height: 40px;
        display:block; 
    }
`