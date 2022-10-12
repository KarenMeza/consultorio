import { createGetInitialProps} from "@mantine/next";
import Document from "next/document";

const getGetInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getGetInitialProps =getGetInitialProps;
}