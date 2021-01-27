import { showMessage } from '~/utils';

export function showError(error: string): void {
  showMessage({
    message: 'Error',
    description: error,
    type: 'danger',
  });
}
