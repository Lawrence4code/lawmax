import Link from 'next/link'
import Layout from '../components/Layout'

import tw from "twin.macro";

import styled from 'styled-components'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Lanwrence's new portfolio site, Lawmax  👋</h1>
    <p>
      <Link href="/about">
        <PrimaryButton>
        <a>About</a>
        </PrimaryButton>
      </Link>
    </p>
  </Layout>
)


const PrimaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-blue-600`; 

const StyledButton = styled.button`
  background-color: red;
  padding: 1rem;
`;

export default IndexPage
