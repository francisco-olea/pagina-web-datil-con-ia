'use client'

import { useState } from 'react'
import { PageLayout } from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ProfileType = 'productor' | 'otro' | ''

const surfaceOptions = [
  'Menos de 1 hectárea',
  '1 – 5 hectáreas',
  '6 – 20 hectáreas',
  '21 – 50 hectáreas',
  '51 – 100 hectáreas',
  'Más de 100 hectáreas',
]

export default function ContactoPage() {
  const [profile, setProfile] = useState<ProfileType>('')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: '',
    // producer-specific
    nombreProductora: '',
    superficie: '',
    ubicacion: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.72 0.18 52 / 0.10), transparent)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Estamos para escucharte
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Contáctanos
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
            Cuéntanos quién eres y en qué podemos apoyarte. Si eres productor de dátil de la región, queremos conocer tu datilera.
          </p>
        </div>
      </section>

      {/* Form area */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            /* Success state */
            <div
              className="rounded-2xl border border-primary/30 p-10 text-center space-y-4"
              style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mx-auto" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Mensaje recibido</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gracias por escribirnos, <strong className="text-foreground">{formData.nombre}</strong>. Nos pondremos en contacto contigo a la brevedad posible.
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => { setSubmitted(false); setProfile(''); setFormData({ nombre: '', telefono: '', mensaje: '', nombreProductora: '', superficie: '', ubicacion: '' }) }}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border p-8 lg:p-10 space-y-6"
              style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
              noValidate
            >
              {/* Profile selector */}
              <fieldset>
                <legend className="text-sm font-semibold text-foreground mb-3">
                  ¿Cómo te describes? <span className="text-primary" aria-label="requerido">*</span>
                </legend>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setProfile('productor')}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all duration-150 ${
                      profile === 'productor'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                    aria-pressed={profile === 'productor'}
                  >
                    <span className="block font-semibold mb-0.5">Soy productor de dátil</span>
                    <span className="block text-xs opacity-80">Tengo una datilera en la región noroeste</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfile('otro')}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium text-left transition-all duration-150 ${
                      profile === 'otro'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                    aria-pressed={profile === 'otro'}
                  >
                    <span className="block font-semibold mb-0.5">Otro perfil</span>
                    <span className="block text-xs opacity-80">Profesional, investigador, interesado</span>
                  </button>
                </div>
              </fieldset>

              {profile !== '' && (
                <>
                  {/* Common fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">
                        Nombre completo <span className="text-primary" aria-label="requerido">*</span>
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="bg-background/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">
                        Número de teléfono <span className="text-primary" aria-label="requerido">*</span>
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+52 (xxx) xxx-xxxx"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="bg-background/50 border-border"
                      />
                    </div>
                  </div>

                  {/* Producer-specific questions */}
                  {profile === 'productor' && (
                    <fieldset className="space-y-5">
                      <legend className="text-sm font-semibold text-foreground pb-1">
                        Información de tu datilera
                      </legend>
                      <div className="space-y-2">
                        <Label htmlFor="nombreProductora">
                          Nombre de la productora (datilera) <span className="text-primary" aria-label="requerido">*</span>
                        </Label>
                        <Input
                          id="nombreProductora"
                          name="nombreProductora"
                          type="text"
                          placeholder="Ej. Rancho El Dátil, Agrícola Las Palmas…"
                          required
                          value={formData.nombreProductora}
                          onChange={handleChange}
                          className="bg-background/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="superficie">
                          Tamaño de superficie productiva <span className="text-primary" aria-label="requerido">*</span>
                        </Label>
                        <Select
                          onValueChange={(val) => setFormData((prev) => ({ ...prev, superficie: val }))}
                          required
                        >
                          <SelectTrigger
                            id="superficie"
                            className="bg-background/50 border-border w-full"
                          >
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                          <SelectContent>
                            {surfaceOptions.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ubicacion">
                          Ubicación <span className="text-primary" aria-label="requerido">*</span>
                        </Label>
                        <Input
                          id="ubicacion"
                          name="ubicacion"
                          type="text"
                          placeholder="Municipio, estado (ej. San Luis Río Colorado, Sonora)"
                          required
                          value={formData.ubicacion}
                          onChange={handleChange}
                          className="bg-background/50 border-border"
                        />
                      </div>
                    </fieldset>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">
                      Mensaje <span className="text-primary" aria-label="requerido">*</span>
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos en qué podemos apoyarte, tu opinión o cualquier idea para mejorar el servicio…"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="bg-background/50 border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-semibold"
                    style={{ backgroundColor: 'oklch(0.72 0.18 52)', color: 'oklch(0.10 0.015 40)' }}
                    disabled={
                      !formData.nombre ||
                      !formData.telefono ||
                      !formData.mensaje ||
                      (profile === 'productor' &&
                        (!formData.nombreProductora || !formData.superficie || !formData.ubicacion))
                    }
                  >
                    Enviar mensaje
                  </Button>
                </>
              )}
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
