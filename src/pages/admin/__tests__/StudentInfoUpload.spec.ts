import { findComponent } from "@/utils"
import StudentInfoUpload from "../StudentInfoUpload.vue"

describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(StudentInfoUpload, "header")
    expect(header.exists()).toBe(true)
  })
})