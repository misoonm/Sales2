<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الموردين - نظام إدارة المحلات التجارية</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <style>
        :root {
            --primary-color: #4e73df;
            --primary-light: #7a9ff7;
            --primary-dark: #2a4b9e;
            --secondary-color: #1cc88a;
            --secondary-light: #4adca8;
            --secondary-dark: #138a5e;
            --warning-color: #f6c23e;
            --warning-light: #f9d37a;
            --warning-dark: #c99a1a;
            --danger-color: #e74a3b;
            --danger-light: #ef7e73;
            --danger-dark: #b21f15;
            --dark-color: #5a5c69;
            --light-color: #f8f9fc;
            --gray-100: #f8f9fc;
            --gray-200: #eaecf4;
            --gray-300: #dddfeb;
            --gray-400: #d1d3e2;
            --gray-500: #b7b9cc;
            --gray-600: #858796;
            --gray-700: #6e707e;
            --gray-800: #5a5c69;
            --gray-900: #3a3b45;
            --transition: all 0.3s ease;
            --shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
            --shadow-hover: 0 0.5rem 2rem 0 rgba(58, 59, 69, 0.2);
            --radius: 0.75rem;
            --navbar-height: 70px;
        }

        [data-theme="dark"] {
            --primary-color: #4e73df;
            --primary-light: #7a9ff7;
            --primary-dark: #2a4b9e;
            --secondary-color: #1cc88a;
            --secondary-light: #4adca8;
            --secondary-dark: #138a5e;
            --warning-color: #f6c23e;
            --warning-light: #f9d37a;
            --warning-dark: #c99a1a;
            --danger-color: #e74a3b;
            --danger-light: #ef7e73;
            --danger-dark: #b21f15;
            --dark-color: #d1d3e2;
            --light-color: #2a2b3d;
            --gray-100: #2a2b3d;
            --gray-200: #353646;
            --gray-300: #3f4051;
            --gray-400: #4a4b5c;
            --gray-500: #5a5c69;
            --gray-600: #858796;
            --gray-700: #b7b9cc;
            --gray-800: #d1d3e2;
            --gray-900: #eaecf4;
        }

        body {
            font-family: 'Cairo', 'Tahoma', sans-serif;
            background-color: var(--light-color);
            color: var(--gray-900);
            transition: var(--transition);
            padding-top: var(--navbar-height);
            min-height: 100vh;
        }

        .navbar-top {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            height: var(--navbar-height);
            box-shadow: var(--shadow);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            transition: var(--transition);
        }

        .navbar-top .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }

        .navbar-bottom {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: var(--gray-100);
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1020;
            border-top: 1px solid var(--gray-300);
            transition: var(--transition);
        }

        .nav-item-bottom {
            text-align: center;
            padding: 12px 0;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
            color: var(--gray-600);
            text-decoration: none;
        }

        .nav-item-bottom:hover, .nav-item-bottom.active {
            color: var(--primary-color);
        }

        .nav-item-bottom.active::before {
            content: '';
            position: absolute;
            top: 0;
            right: 50%;
            transform: translateX(50%);
            width: 70%;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 0 0 3px 3px;
        }

        .nav-item-bottom i {
            font-size: 1.25rem;
            display: block;
            margin: 0 auto 5px;
            transition: var(--transition);
        }

        .nav-item-bottom span {
            font-size: 0.75rem;
            display: block;
        }

        .card {
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            margin-bottom: 20px;
            transition: var(--transition);
            border: none;
            background-color: var(--gray-100);
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
        }

        .card-header {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            border-radius: var(--radius) var(--radius) 0 0 !important;
        }

        .card-header.bg-success {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-dark) 100%) !important;
        }

        .table {
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .table th {
            background: linear-gradient(to right, var(--primary-color), var(--primary-light));
            color: white;
            border: none;
            padding: 1rem;
            font-weight: 600;
        }

        .table td {
            padding: 1rem;
            border-color: var(--gray-300);
            vertical-align: middle;
        }

        .table tbody tr {
            transition: var(--transition);
        }

        .table tbody tr:hover {
            background-color: var(--gray-200);
        }

        .search-box {
            margin-bottom: 20px;
            position: relative;
        }

        .search-box .form-control {
            border-radius: 50px;
            padding-right: 45px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--gray-300);
            transition: var(--transition);
        }

        .search-box .form-control:focus {
            box-shadow: 0 2px 10px rgba(78, 115, 223, 0.2);
            border-color: var(--primary-light);
        }

        .search-box .btn {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--primary-color);
            border: none;
            transition: var(--transition);
        }

        .search-box .btn:hover {
            background: var(--primary-dark);
        }

        .btn {
            border-radius: var(--radius);
            padding: 0.5rem 1.5rem;
            font-weight: 600;
            transition: var(--transition);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .btn i {
            margin-left: 5px;
        }

        .btn-primary {
            background: linear-gradient(to right, var(--primary-color), var(--primary-light));
            border: none;
        }

        .btn-primary:hover {
            background: linear-gradient(to right, var(--primary-dark), var(--primary-color));
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(78, 115, 223, 0.3);
        }

        .btn-success {
            background: linear-gradient(to right, var(--secondary-color), var(--secondary-light));
            border: none;
        }

        .btn-success:hover {
            background: linear-gradient(to right, var(--secondary-dark), var(--secondary-color));
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(28, 200, 138, 0.3);
        }

        .btn-danger {
            background: linear-gradient(to right, var(--danger-color), var(--danger-light));
            border: none;
        }

        .btn-danger:hover {
            background: linear-gradient(to right, var(--danger-dark), var(--danger-color));
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(231, 74, 59, 0.3);
        }

        .btn-action {
            margin: 0 3px;
            width: 32px;
            height: 32px;
            padding: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .modal-content {
            border-radius: var(--radius);
            border: none;
            box-shadow: var(--shadow-hover);
        }

        .modal-header {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            border-radius: var(--radius) var(--radius) 0 0;
        }

        .modal-header .btn-close {
            filter: invert(1);
        }

        .form-select, .form-control {
            margin-bottom: 15px;
            border-radius: var(--radius);
            border: 1px solid var(--gray-300);
            padding: 0.75rem 1rem;
            transition: var(--transition);
        }

        .form-select:focus, .form-control:focus {
            box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
            border-color: var(--primary-light);
        }

        @media (max-width: 768px) {
            .table-responsive {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="navbar-top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <span id="store-name">متجري</span>
                </div>
                <div class="col-4 text-center">
                    <span id="current-date"></span>
                </div>
                <div class="col-4 text-end">
                    <span>مرحباً، مدير النظام</span>
                    <button class="btn btn-outline-light btn-sm ms-2" id="logout-btn">
                        <i class="bi bi-box-arrow-right"></i> تسجيل الخروج
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-4">
        <h2 class="mb-4">إدارة الموردين</h2>
        
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="input-group search-box">
                    <input type="text" class="form-control" placeholder="بحث عن مورد..." id="supplier-search">
                    <button class="btn btn-primary" type="button">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-6 text-end">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addSupplierModal">
                    <i class="bi bi-plus-circle"></i> إضافة مورد جديد
                </button>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-white">قائمة الموردين</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="suppliers-table" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>اسم المورد</th>
                                <th>جهة الاتصال</th>
                                <th>الهاتف</th>
                                <th>البريد الإلكتروني</th>
                                <th>المنتجات الموردة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- سيتم ملء هذا الجدول بواسطة JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="card mt-4">
            <div class="card-header py-3 bg-success">
                <h6 class="m-0 font-weight-bold text-white">سجل المشتريات من الموردين</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="purchases-table" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>رقم الفاتورة</th>
                                <th>التاريخ</th>
                                <th>المورد</th>
                                <th>المنتجات</th>
                                <th>المبلغ</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- سيتم ملء هذا الجدول بواسطة JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar-bottom">
        <div class="container">
            <div class="row">
                <div class="col-2 nav-item-bottom" onclick="window.location.href='dashboard.html'">
                    <i class="bi bi-speedometer2"></i>
                    <span>لوحة التحكم</span>
                </div>
                <div class="col-2 nav-item-bottom" onclick="window.location.href='products.html'">
                    <i class="bi bi-box-seam"></i>
                    <span>المنتجات</span>
                </div>
                <div class="col-2 nav-item-bottom" onclick="window.location.href='pos.html'">
                    <i class="bi bi-cash-coin"></i>
                    <span>نقطة البيع</span>
                </div>
                <div class="col-2 nav-item-bottom" onclick="window.location.href='reports.html'">
                    <i class="bi bi-graph-up"></i>
                    <span>التقارير</span>
                </div>
                <div class="col-2 nav-item-bottom active">
                    <i class="bi bi-truck"></i>
                    <span>الموردين</span>
                </div>
                <div class="col-2 nav-item-bottom" onclick="window.location.href='credit.html'">
                    <i class="bi bi-credit-card"></i>
                    <span>آجل</span>
                </div>      
            </div>
        </div>
    </nav>

    <!-- Modal إضافة مورد جديد -->
    <div class="modal fade" id="addSupplierModal" tabindex="-1" aria-labelledby="addSupplierModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addSupplierModalLabel">إضافة مورد جديد</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="add-supplier-form">
                        <div class="mb-3">
                            <label for="supplierName" class="form-label">اسم المورد</label>
                            <input type="text" class="form-control" id="supplierName" required>
                        </div>
                        <div class="mb-3">
                            <label for="supplierContact" class="form-label">اسم جهة الاتصال</label>
                            <input type="text" class="form-control" id="supplierContact">
                        </div>
                        <div class="mb-3">
                            <label for="supplierPhone" class="form-label">رقم الهاتف</label>
                            <input type="tel" class="form-control" id="supplierPhone">
                        </div>
                        <div class="mb-3">
                            <label for="supplierEmail" class="form-label">البريد الإلكتروني</label>
                            <input type="email" class="form-control" id="supplierEmail">
                        </div>
                        <div class="mb-3">
                            <label for="supplierAddress" class="form-label">العنوان</label>
                            <textarea class="form-control" id="supplierAddress" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="supplierProducts" class="form-label">المنتجات التي يوردها</label>
                            <textarea class="form-control" id="supplierProducts" rows="2"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" id="save-supplier-btn">حفظ المورد</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal تعديل مورد -->
    <div class="modal fade" id="editSupplierModal" tabindex="-1" aria-labelledby="editSupplierModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editSupplierModalLabel">تعديل المورد</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="edit-supplier-form">
                        <input type="hidden" id="editSupplierId">
                        <div class="mb-3">
                            <label for="editSupplierName" class="form-label">اسم المورد</label>
                            <input type="text" class="form-control" id="editSupplierName" required>
                        </div>
                        <div class="mb-3">
                            <label for="editSupplierContact" class="form-label">اسم جهة الاتصال</label>
                            <input type="text" class="form-control" id="editSupplierContact">
                        </div>
                        <div class="mb-3">
                            <label for="editSupplierPhone" class="form-label">رقم اله電話</label>
                            <input type="tel" class="form-control" id="editSupplierPhone">
                        </div>
                        <div class="mb-3">
                            <label for="editSupplierEmail" class="form-label">البريد الإلكتروني</label>
                            <input type="email" class="form-control" id="editSupplierEmail">
                        </div>
                        <div class="mb-3">
                            <label for="editSupplierAddress" class="form-label">العنوان</label>
                            <textarea class="form-control" id="editSupplierAddress" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="editSupplierProducts" class="form-label">المنتجات التي يوردها</label>
                            <textarea class="form-control" id="editSupplierProducts" rows="2"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" id="update-supplier-btn">تحديث المورد</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal عرض تفاصيل الشراء -->
    <div class="modal fade" id="viewPurchaseModal" tabindex="-1" aria-labelledby="viewPurchaseModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewPurchaseModalLabel">تفاصيل عملية الشراء</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="purchase-details">
                        <!-- سيتم ملء هذا القسم بواسطة JavaScript -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                </div>
            </div>
        </div>
    </div>

             

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- تضمين ملف قاعدة البيانات -->
    <script src="database.js"></script>
    <script>
        // التحقق من تسجيل الدخول
        const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
        if (!currentUser) {
            window.location.href = 'index.html';
        }

        // تهيئة التاريخ والوقت
        function updateDateTime() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('current-date').textContent = now.toLocaleDateString('ar-YE', options);
        }
        
        updateDateTime();
        setInterval(updateDateTime, 60000);

        // تسجيل الخروج
        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            sessionStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });

        // دالة لتحميل الموردين وعرضهم
        async function loadSuppliers() {
            try {
                const suppliers = await db.getSuppliers();
                const purchases = await db.getAll('purchases');
                
                const suppliersTableBody = document.querySelector('#suppliers-table tbody');
                suppliersTableBody.innerHTML = '';
                
                if (suppliers.length === 0) {
                    suppliersTableBody.innerHTML = '<tr><td colspan="6" class="text-center">لا توجد موردين</td></tr>';
                } else {
                    suppliers.forEach(supplier => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${supplier.name}</td>
                            <td>${supplier.contact || '-'}</td>
                            <td>${supplier.phone || '-'}</td>
                            <td>${supplier.email || '-'}</td>
                            <td>${supplier.products || '-'}</td>
                            <td>
                                <button class="btn btn-sm btn-primary btn-action edit-supplier-btn" data-id="${supplier.id}">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn btn-sm btn-danger btn-action delete-supplier-btn" data-id="${supplier.id}">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </td>
                        `;
                        suppliersTableBody.appendChild(row);
                    });
                }
                
                // تحديث جدول المشتريات
                const purchasesTableBody = document.querySelector('#purchases-table tbody');
                purchasesTableBody.innerHTML = '';
                
                if (purchases.length === 0) {
                    purchasesTableBody.innerHTML = '<tr><td colspan="6" class="text-center">لا توجد مشتريات</td></tr>';
                } else {
                    // عرض آخر 20 عملية شراء
                    const recentPurchases = purchases.slice(-20).reverse();
                    
                    for (const purchase of recentPurchases) {
                        const supplier = await db.get('suppliers', purchase.supplierId);
                        const supplierName = supplier ? supplier.name : 'مورد غير معروف';
                        
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${purchase.invoiceNumber}</td>
                            <td>${purchase.date}</td>
                            <td>${supplierName}</td>
                            <td>${purchase.items.length} منتج</td>
                            <td>${purchase.total.toLocaleString()} ريال</td>
                            <td>
                                <button class="btn btn-sm btn-info view-purchase-btn" data-id="${purchase.invoiceNumber}">
                                    <i class="bi bi-eye"></i>
                                </button>
                            </td>
                        `;
                        purchasesTableBody.appendChild(row);
                    }
                }
                
                // إضافة معالجات الأحداث لأزرار الموردين
                document.querySelectorAll('.edit-supplier-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const supplierId = parseInt(this.getAttribute('data-id'));
                        editSupplier(supplierId);
                    });
                });
                
                document.querySelectorAll('.delete-supplier-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const supplierId = parseInt(this.getAttribute('data-id'));
                        deleteSupplier(supplierId);
                    });
                });
                
                document.querySelectorAll('.view-purchase-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const invoiceNumber = this.getAttribute('data-id');
                        viewPurchase(invoiceNumber);
                    });
                });
            } catch (error) {
                console.error('خطأ في تحميل الموردين:', error);
                alert('حدث خطأ أثناء تحميل البيانات');
            }
        }

        // حفظ مورد جديد
        document.getElementById('save-supplier-btn').addEventListener('click', async function() {
            try {
                const name = document.getElementById('supplierName').value;
                const contact = document.getElementById('supplierContact').value;
                const phone = document.getElementById('supplierPhone').value;
                const email = document.getElementById('supplierEmail').value;
                const address = document.getElementById('supplierAddress').value;
                const products = document.getElementById('supplierProducts').value;
                
                if (!name) {
                    alert('يرجى إدخال اسم المورد');
                    return;
                }
                
                const newSupplier = {
                    name,
                    contact,
                    phone,
                    email,
                    address,
                    products,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                
                await db.addSupplier(newSupplier);
                
                // إغلاق النموذج وإعادة التحميل
                bootstrap.Modal.getInstance(document.getElementById('addSupplierModal')).hide();
                document.getElementById('add-supplier-form').reset();
                
                // إعادة تحميل البيانات
                await loadSuppliers();
                
                alert('تم حفظ المورد بنجاح');
            } catch (error) {
                console.error('خطأ في حفظ المورد:', error);
                alert('حدث خطأ أثناء حفظ المورد');
            }
        });

        // تحرير مورد
        async function editSupplier(supplierId) {
            try {
                const supplier = await db.get('suppliers', supplierId);
                
                if (!supplier) {
                    alert('المورد غير موجود');
                    return;
                }
                
                // تعبئة النموذج ببيانات المورد
                document.getElementById('editSupplierId').value = supplier.id;
                document.getElementById('editSupplierName').value = supplier.name;
                document.getElementById('editSupplierContact').value = supplier.contact || '';
                document.getElementById('editSupplierPhone').value = supplier.phone || '';
                document.getElementById('editSupplierEmail').value = supplier.email || '';
                document.getElementById('editSupplierAddress').value = supplier.address || '';
                document.getElementById('editSupplierProducts').value = supplier.products || '';
                
                // فتح النموذج
                const editModal = new bootstrap.Modal(document.getElementById('editSupplierModal'));
                editModal.show();
            } catch (error) {
                console.error('خطأ في تحميل بيانات المورد:', error);
                alert('حدث خطأ أثناء تحميل بيانات المورد');
            }
        }

        // تحديث المورد
        document.getElementById('update-supplier-btn').addEventListener('click', async function() {
            try {
                const supplierId = parseInt(document.getElementById('editSupplierId').value);
                const name = document.getElementById('editSupplierName').value;
                const contact = document.getElementById('editSupplierContact').value;
                const phone = document.getElementById('editSupplierPhone').value;
                const email = document.getElementById('editSupplierEmail').value;
                const address = document.getElementById('editSupplierAddress').value;
                const products = document.getElementById('editSupplierProducts').value;
                
                if (!name) {
                    alert('يرجى إدخال اسم المورد');
                    return;
                }
                
                const existingSupplier = await db.get('suppliers', supplierId);
                
                if (!existingSupplier) {
                    alert('المورد غير موجود');
                    return;
                }
                
                const updatedSupplier = {
                    ...existingSupplier,
                    name,
                    contact,
                    phone,
                    email,
                    address,
                    products,
                    updatedAt: new Date()
                };
                
                await db.update('suppliers', updatedSupplier);
                
                // إغلاق النموذج
                bootstrap.Modal.getInstance(document.getElementById('editSupplierModal')).hide();
                
                // إعادة تحميل البيانات
                await loadSuppliers();
                
                alert('تم تحديث المورد بنجاح');
            } catch (error) {
                console.error('خطأ في تحديث المورد:', error);
                alert('حدث خطأ أثناء تحديث المورد');
            }
        });

        // حذف مورد
        async function deleteSupplier(supplierId) {
            if (!confirm('هل أنت متأكد من حذف هذا المورد؟')) {
                return;
            }
            
            try {
                // التحقق من وجود مشتريات مرتبطة بهذا المورد
                const purchases = await db.getAll('purchases');
                const hasPurchases = purchases.some(purchase => purchase.supplierId === supplierId);
                
                if (hasPurchases) {
                    alert('لا يمكن حذف هذا المورد لأنه مرتبط بعمليات شراء سابقة');
                    return;
                }
                
                await db.delete('suppliers', supplierId);
                
                // إعادة تحميل البيانات
                await loadSuppliers();
                
                alert('تم حذف المورد بنجاح');
            } catch (error) {
                console.error('خطأ في حذف المورد:', error);
                alert('حدث خطأ أثناء حذف المورد');
            }
        }

        // عرض تفاصيل عملية الشراء
        async function viewPurchase(invoiceNumber) {
            try {
                const purchase = await db.getByIndex('purchases', 'invoiceNumber', invoiceNumber);
                
                if (!purchase) {
                    alert('لم يتم العثور على عملية الشراء');
                    return;
                }
                
                const supplier = await db.get('suppliers', purchase.supplierId);
                const supplierName = supplier ? supplier.name : 'مورد غير معروف';
                
                let purchaseDetails = `
                    <div class="mb-3">
                        <h5>تفاصيل الفاتورة: ${purchase.invoiceNumber}</h5>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <p><strong>التاريخ:</strong> ${purchase.date}</p>
                            <p><strong>المورد:</strong> ${supplierName}</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong>إجمالي الفاتورة:</strong> ${purchase.total.toLocaleString()} ريال</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <h6>المنتجات المشتراة:</h6>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>اسم المنتج</th>
                                    <th>الكمية</th>
                                    <th>السعر</th>
                                    <th>الإجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                `;
                
                purchase.items.forEach(item => {
                    purchaseDetails += `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price.toLocaleString()} ريال</td>
                            <td>${(item.quantity * item.price).toLocaleString()} ريال</td>
                        </tr>
                    `;
                });
                
                purchaseDetails += `
                            </tbody>
                        </table>
                    </div>
                `;
                
                document.getElementById('purchase-details').innerHTML = purchaseDetails;
                
                // فتح النموذج
                const viewModal = new bootstrap.Modal(document.getElementById('viewPurchaseModal'));
                viewModal.show();
            } catch (error) {
                console.error('خطأ في عرض تفاصيل الشراء:', error);
                alert('حدث خطأ أثناء عرض تفاصيل الشراء');
            }
        }

        // البحث عن الموردين
        document.getElementById('supplier-search').addEventListener('input', async function() {
            try {
                const searchTerm = this.value.toLowerCase();
                const suppliers = await db.getSuppliers();
                
                const filteredSuppliers = suppliers.filter(supplier => 
                    supplier.name.toLowerCase().includes(searchTerm) || 
                    (supplier.contact && supplier.contact.toLowerCase().includes(searchTerm)) ||
                    (supplier.products && supplier.products.toLowerCase().includes(searchTerm))
                );
                
                // تحديث الجدول
                const tableBody = document.querySelector('#suppliers-table tbody');
                tableBody.innerHTML = '';
                
                if (filteredSuppliers.length === 0) {
                    tableBody.innerHTML = '<tr><td colspan="6" class="text-center">لا توجد موردين تطابق البحث</td></tr>';
                    return;
                }
                
                filteredSuppliers.forEach(supplier => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${supplier.name}</td>
                        <td>${supplier.contact || '-'}</td>
                        <td>${supplier.phone || '-'}</td>
                        <td>${supplier.email || '-'}</td>
                        <td>${supplier.products || '-'}</td>
                        <td>
                            <button class="btn btn-sm btn-primary btn-action edit-supplier-btn" data-id="${supplier.id}">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-danger btn-action delete-supplier-btn" data-id="${supplier.id}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
                
                // إعادة إضافة معالجات الأحداث
                document.querySelectorAll('.edit-supplier-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const supplierId = parseInt(this.getAttribute('data-id'));
                        editSupplier(supplierId);
                    });
                });
                
                document.querySelectorAll('.delete-supplier-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const supplierId = parseInt(this.getAttribute('data-id'));
                        deleteSupplier(supplierId);
                    });
                });
            } catch (error) {
                console.error('خطأ في البحث:', error);
                alert('حدث خطأ أثناء البحث');
            }
        });

        // تحميل البيانات عند فتح الصفحة
        document.addEventListener('DOMContentLoaded', async function() {
            try {
                // تهيئة قاعدة البيانات
                const dbInitialized = await initDatabase();
                if (!dbInitialized) {
                    alert('حدث خطأ في تهيئة قاعدة البيانات');
                    return;
                }
                
                // ترحيل البيانات من localStorage إذا كانت موجودة
                await migrateFromLocalStorage();
                
                // تحميل الموردين
                await loadSuppliers();
                
                // تحميل اسم المتجر من الإعدادات
                const settings = await db.getSettings();
                document.getElementById('store-name').textContent = settings.storeName || 'متجري';
            } catch (error) {
                console.error('خطأ في تحميل الصفحة:', error);
                alert('حدث خطأ أثناء تحميل الصفحة');
            }
        });
    </script>                                                      
</body>
</html>
