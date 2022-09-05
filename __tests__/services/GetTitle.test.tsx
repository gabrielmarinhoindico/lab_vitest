import { getByTestId, queryByTestId, render, renderHook, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, test } from 'vitest';
import { getTitle } from '../../services/getTitle';
import { titleMock } from '../mocks/mocks';

describe('Testing return of fetch', () => {
    it('Fetch title', async () => {
        const { result } = renderHook(
            async () => await getTitle(),

          )
          const [data] = await result.current;
          expect(data.title).toBe(titleMock[0].title)
        
    });
});