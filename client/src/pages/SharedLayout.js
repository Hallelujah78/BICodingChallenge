import { Outlet } from "react-router-dom";
import styled from "styled-components";
const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <div>
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};
export default SharedLayout;

const Wrapper = styled.section``;
