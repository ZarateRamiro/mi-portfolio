export interface Skill {
  id: number;
  nombre: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  icono?: string; // URL o clase del icono (opcional)
}
