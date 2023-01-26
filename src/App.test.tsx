import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import AppWrapper from "./App";


expect.extend(matchers)
describe("Test Wishlist component", () => {
  it('loads and displays greeting', async () => {
    render(
      <AppWrapper /> //rendering all app
    )

    const firstWishlistButton = await screen.findByTestId("wishlist-button-CirezgEACAAJ") //await to find something by testid
    expect(firstWishlistButton).toHaveAttribute('data-testid', 'wishlist-button-CirezgEACAAJ') //expect wishlist to have attribute => redondent
    expect(firstWishlistButton).toBeTruthy() //check if it exists
    await userEvent.click(firstWishlistButton) //Then simulate userEvent with a click
    const svg = firstWishlistButton.querySelector('svg') //Select svg element wich is a child of 1st wishlist button
    expect(svg).toHaveAttribute('fill', '#213547') // Check if attribute of svg is the value we are looking for
  })
  // This code will need to be updated when Redux Persist installed =>
  // will need to use mocked data
})