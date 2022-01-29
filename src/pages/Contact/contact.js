import React from "react";
import { Container, FormDiv, H1, Form, Input, Textarea, Button } from "./styles";

const Contact = () => {
  return (
    <Container>
      <FormDiv>
        <H1 className="text-2xl">Contact Us</H1>
        <Form action="#" method="post">
          <Input type="text" placeholder="Your name" />
          <Input type="email" placeholder="Your email" />
          <Input type="text" placeholder="Your phone" />
          <Textarea placeholder="Your message" />
          <Button type="submit" value="Send">Send</Button>
        </Form>
      </FormDiv>
    </Container>
  );
};

export default Contact;
