<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Measurement;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MeasurementController extends Controller
{
     public function index()
    {
        $measurements = Measurement::all();

        return Inertia::render('Dashboard/Recipe/MeasurementUnits/Index', [
            'measurements' => $measurements,
        ]);
    }

    // Menampilkan form create (opsional, kalau pakai page create terpisah)
    public function create()
    {
        return Inertia::render('Dashboard/Recipe/Measurement/Create');
    }

    // Simpan measurement baru ke database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'symbol' => 'nullable|string|max:50',
            'type' => 'required|in:Berat,Volume,Lainnya',
        ]);

        Measurement::create($validated);

        return redirect()->route('measurements.index')->with('success', 'Satuan berhasil ditambahkan.');
    }

    // Menampilkan satu measurement untuk ditampilkan detail (opsional)
    public function show(Measurement $measurement)
    {
        return Inertia::render('Dashboard/Recipe/Measurement/Show', [
            'measurement' => $measurement,
        ]);
    }

    // Menampilkan form edit (jika halaman edit terpisah)
    public function edit(Measurement $measurement)
    {
        return Inertia::render('Dashboard/Recipe/Measurement/Edit', [
            'measurement' => $measurement,
        ]);
    }

    // Update data measurement yang sudah ada
    public function update(Request $request, Measurement $measurement)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'symbol' => 'nullable|string|max:50',
            'type' => 'required|in:Berat,Volume,Lainnya',
        ]);

        $measurement->update($validated);

        return redirect()->route('measurements.index')->with('success', 'Satuan berhasil diperbarui.');
    }

    // Hapus data measurement
    public function destroy(Measurement $measurement)
    {
        $measurement->delete();

        return redirect()->route('measurements.index')->with('success', 'Satuan berhasil dihapus.');
    }
}
