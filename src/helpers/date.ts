import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import { ptBR } from 'date-fns/locale';

export function getDateCurrent(): string {
  const t = format(new Date(), 'PPPP', { locale: ptBR });
  const f = t.replace('de 2021', '');
  return f.charAt(0).toUpperCase() + f.slice(1);
}

export function getFormatDT(dt: number): string {
  const result = fromUnixTime(dt);
  const t = format(result, 'PPPP', { locale: ptBR });
  const f = t.replace('de 2021', '');
  return f.charAt(0).toUpperCase() + f.slice(1);
}
