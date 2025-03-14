import { mount } from '@vue/test-utils';
import Booking from '@/views/Booking.vue';
import { vi } from 'vitest';
import axios from 'axios';
import { describe, it, expect, beforeEach } from 'vitest'

vi.mock('axios');

describe('Foglalási táblázat tesztje', () => {
  it('Megjeleníti az időpontokat', async () => {
    axios.get.mockResolvedValue({
      data: [
        { day: 'Hétfő', hour: '9:00', booked: true },
        { day: 'Kedd', hour: '10:00', booked: false }
      ]
    });
    const wrapper = mount(Booking);
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(wrapper.findAll('button').length).toBeGreaterThan(0);
  });

  it('A foglalt időpontok le vannak tiltva, a szabadok kattinthatók', async () => {
    axios.get.mockResolvedValue({
      data: [
        { day: 'Hétfő', hour: '9:00', booked: true },
        { day: 'Kedd', hour: '10:00', booked: false }
      ]
    });
    const wrapper = mount(Booking);
    await new Promise(resolve => setTimeout(resolve, 100));
    const buttons = wrapper.findAll('button');
    const bookedButton = buttons.find(button => button.text() === '9:00');
    expect(bookedButton.attributes('disabled')).toBe('');
    const freeButton = buttons.find(button => button.text() === '10:00');
    expect(freeButton.attributes('disabled')).toBeUndefined();
  });
});
