import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #1a1818;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }
      .body{
        img{
          margin: 1rem 0;
          width: 100%;
          border-radius: 1.2rem;
        }
        ul{
          li{

            list-style: disc inside;
          }
        }
      }
      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a{
          font-size:28px;
          color:white;
          &:hover{
            color: var(--green);
          }
        }
      }
      
      h3{
        margin-bottom: 1rem;
      }

      ul{
        margin-bottom: 1rem;
      }

      footer{
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
        }
      }

    }
  }
.project-links {
  display:flex;
  align-items:center;
  justify-content:space-between;
}
  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`