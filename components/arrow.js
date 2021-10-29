import styled from '@emotion/styled'

const Arrow = styled.div`
  border-bottom: solid 2px #525252;
  width: 100%;
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: white;
    border-bottom: 2px solid red;
  }
`

 Arrow

const ArrowComponent = () => {
    return(
        <div>
            <Arrow />
            <div>
                
            </div>
        </div>
    )
}
export default ArrowComponent