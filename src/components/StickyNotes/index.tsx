import { Reminder } from "../Reminder";
import { Title } from "../Title";
import { Container, Grid } from "./styled";

export const StickyNotes = () => {
  return (
    <Container>
      <Title />
      <Grid>
        <Reminder />
      </Grid>
    </Container>
  );
}

