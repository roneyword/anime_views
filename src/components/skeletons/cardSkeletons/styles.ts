import styled from 'styled-components';

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 20px;
  padding: 250px 0 0 0;
  margin: 0;

  li{
    list-style: none;
    margin-bottom: 10px;

    .card-content{
      background:#FFFFFF40;
      border-radius: 4px;
      
      .skeleton-image{
        width: 100%;
        height: 343px;
      }

      .skeleton-title{
        width: 172px;
      }
    }
    
    .card-content-title{
      width: 172px;
      margin-top: 12px;
    }
  }

  @media(max-width: 485px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    li{
      .card-content{
        width: 200px;
        background:#FFFFFF40;
        border-radius: 4px;
        
        .skeleton-image{
          width: 200px;
          height: 300px;
        }

        .skeleton-title{
          width: 172px;
        }
      }
      
      .card-content-title{
        width: 172px;
        margin-top: 12px;
      }
    }
  }
`;