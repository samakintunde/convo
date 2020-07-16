import React from "react";
import { ButtonCard } from "../../components/common/ButtonCard";
import { IoIosAddCircleOutline, IoIosColorFilter } from "react-icons/io";
import { Link } from "react-router-dom";
import Stack from "components/common/Stack";
import { GridContainer } from "components/common/GridContainer/GridContainer";
import Box from "components/common/Box";

export const Home = () => {
  return (
    <GridContainer height="calc(100vh - 50px)">
      <Box padding="md" height="100%">
        <Stack gap="xl" direction="vertical">
          <div>
            <Link to="/create">
              <ButtonCard icon={IoIosAddCircleOutline} text="Create a Room" />
            </Link>
          </div>
          <div>
            <Link to="join">
              <ButtonCard
                disabled={false}
                icon={IoIosColorFilter}
                text="Join a Room"
              />
            </Link>
          </div>
        </Stack>
      </Box>
    </GridContainer>
  );
};
