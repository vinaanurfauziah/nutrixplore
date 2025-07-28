<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;  
use Illuminate\Support\Facades\Hash;  

class AdminController extends Controller
{
      public function index()
    {
        $admins = User::where('role', 'admin')->get(['id', 'name', 'email']);

        return Inertia::render('Dashboard/Admin/KelolaAdmin/List', [
            'admins' => $admins,
            'auth' => [
                'user' => auth()->user(),
            ],
        ]);
    }
    public function create()
{
    return Inertia::render('Dashboard/Admin/KelolaAdmin/Create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'email', 'max:255', 'unique:users,email'],
        'password' => ['required', 'string', 'min:6'],
    ]);

    User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
        'role' => 'admin',
    ]);

    return redirect()->route('dashboard.kelola-admin.list')->with('success', 'Admin berhasil ditambahkan.');
}

    // Tampilkan halaman edit
public function edit($id)
{
    $admin = User::where('role', 'admin')->findOrFail($id);

    return Inertia::render('Dashboard/Admin/KelolaAdmin/Edit', [
        'id' => $admin->id, // <--- pastikan ini ada
        'admin' => [
            'id' => $admin->id,
            'name' => $admin->name,
            'email' => $admin->email,
        ],
    ]);
}

   // Proses update admin 
public function update(Request $request, $id)
{
    $admin = User::findOrFail($id);

    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,' . $admin->id,
        'password' => 'nullable|min:6',
    ]);

    $admin->name = $request->name;
    $admin->email = $request->email;
    if ($request->filled('password')) {
        $admin->password = bcrypt($request->password);
    }

    $admin->save();

    return redirect()->route('dashboard.kelola-admin.list')
                     ->with('success', 'Admin berhasil diperbarui.');
}


    // Hapus admin
    public function destroy($id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);
        $admin->delete();

        return redirect()->route('dashboard.kelola-admin.list')->with('success', 'Admin berhasil dihapus.');
    }
}