import { TextField, Button, Rating } from "@mui/material";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const AddReviews = () => {
  const [update, setUpdate] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (reviewInfo) => {
    reviewInfo["img"] = user.photoURL;
    reviewInfo.time = new Date().toLocaleDateString();
    reviewInfo["ratingValue"] = ratingValue;
    axios
      .post("https://drone-house-server.adaptable.app/reviews", reviewInfo)
      .then((res) => {
        if (res.data?.insertedId) {
          setUpdate(true);
        }
      });
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center">
              <Rating
                sx={{ fontSize: 30, my: 3 }}
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>
            <TextField
              sx={{ width: "100%", m: 1 }}
              label="Your Name"
              {...register("name", { required: true })}
              defaultValue={user.displayName}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: "100%", m: 1 }}
              multiline
              rows={4}
              inputProps={{ maxLength: 200 }}
              label="Write your review in 200 word here"
              {...register("comment", { required: true })}
              variant="standard"
            />
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></Box>
            <br />
            <Button
              className="hover:border-gray-400   hover:text-gray-500 w-full"
              sx={{
                mt: 2,
                color: "black",
                border: "1px solid",
                borderColor: "black",
              }}
              disabled={update}
              type="submit"
              variant="outline"
            >
              Add Review
            </Button>
            {update && (
              <p className="text-green-500 text-lg font-bold pt-4 text-center">
                Your review is showing on home page!
              </p>
            )}
          </form>
        </Grid>
        <Grid className="flex justify-center" item xs={12} md={6}>
          <img
            src="https://keydifferences.com/wp-content/uploads/2020/04/article-vs-journal.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddReviews;
