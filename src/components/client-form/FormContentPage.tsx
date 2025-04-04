"use client";

import CustomEditor from "./ClientFormEditor";
import ClientFormHeader from "./ClientFormHeader";
import BaseContainer from "../../layouts/BaseContainer";
import ClientFormFooter from "./ClientFormFooter";

interface FormPageProps {
  pathname?: string;
}

export default function FormContentPage(props: FormPageProps) {
  return (
    <BaseContainer pathname={props.pathname}>
      <>
        <ClientFormHeader />
        <CustomEditor />
        <ClientFormFooter />
      </>
    </BaseContainer>
  );
}
