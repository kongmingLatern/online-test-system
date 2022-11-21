import { describe, expect, it } from 'vitest';
import StudentInfoUpdateVue from '@/pages/admin/StudentInfoUpdate.vue';
import { findComponent } from '@/utils';


describe('Header', () => {
  it('we should have a Header component', () => {
    const header = findComponent(StudentInfoUpdateVue, 'header');
    expect(header.exists).toBe(true)
  })
});
