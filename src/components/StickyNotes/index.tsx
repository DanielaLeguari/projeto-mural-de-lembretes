import { Reminder } from "../Reminder";
import { Container, Grid } from "./styled";

export const StickyNotes = () => {
  return (
    <Container>
      <section>
        <h1>
          Lembretes -
        </h1>
      </section>
      <Grid>
        <Reminder/>
      </Grid>
    </Container>
  );
}

